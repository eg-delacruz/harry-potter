import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { RootState } from "../configureStore";

type PostsWithComments = {
  postId: number;
  comments_open: boolean;
  comments: [];
  title: string;
  body: string;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

type LoadedUsers = {
  userId: string;
  posts_key: number;
};

type CommentsState = {
  posts: PostsWithComments[][];
  loaded_users: LoadedUsers[];
  comments_loading: boolean;
  comments_error: string;
};

///////////End of types/////////////

const initialState: CommentsState = {
  posts: [],
  loaded_users: [],
  comments_loading: false,
  comments_error: "",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    cacheLoadedUserAndPosts: (
      state,
      action: PayloadAction<{ posts_without_comments: Post[]; userId: string }>
    ) => {
      const { posts_without_comments, userId } = action.payload;

      const user_already_added_to_state = state.loaded_users.filter(
        (user) => user.userId === userId
      );

      //Validation needed here as well because if done in useEffect, in dev mode it is done twice and triggers this function twice, storing the data twice as well
      if (user_already_added_to_state.length !== 0) {
        return;
      }

      // We create the initial structure to keep track of the comments only when the user opens any character profile
      const new_posts = posts_without_comments.map((post) => {
        return {
          postId: post.id,
          comments_open: false,
          comments: [],
          body: post.body,
          title: post.title,
        } as PostsWithComments;
      });

      const updated_posts = [...state.posts, new_posts];

      // This is/will be the position of the posts in the array of posts_comments, since is in the last position and we only need to get the array length - 1 to get the index
      const posts_key = updated_posts.length - 1;

      const new_loaded_user = { userId, posts_key };

      const updated_loaded_users = [...state.loaded_users, new_loaded_user];

      state.posts = updated_posts;
      state.loaded_users = updated_loaded_users;
    },

    openClose: () => {
      console.log("Holi");
    },
  },
});

export const selectCommentsState = (state: RootState) => state.comments;

export const { cacheLoadedUserAndPosts, openClose } = commentsSlice.actions;
