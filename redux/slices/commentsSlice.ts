import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit/react";
import { RootState } from "../configureStore";

///////////Start of types/////////////
type PostsWithComments = {
  postId: number;
  comments_open: boolean;
  comments: TComment[];
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
  comments_error: string | undefined;
};
///////////End of types/////////////

const INITIAL_STATE: CommentsState = {
  posts: [],
  loaded_users: [],
  comments_loading: false,
  comments_error: "",
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async ({ postId, posts_key }: { postId: number; posts_key: number }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );

      const comments: TComment[] = await response.json();
      return { comments, posts_key, postId };
    } catch (error) {
      console.log(error);
      return "Error at getting comments";
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    //Only sync actions
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

    openClose: (
      state,
      action: PayloadAction<{ posts_key: number; postId: number }>
    ) => {
      const { posts_key, postId } = action.payload;

      const indexOfSelectedPost = state.posts[posts_key].findIndex(
        (post) => post.postId === postId
      );

      //Toggle the open state of the comments
      state.posts[posts_key][indexOfSelectedPost].comments_open =
        !state.posts[posts_key][indexOfSelectedPost].comments_open;
    },
  },

  extraReducers: (builder) => {
    //Async actions
    builder
      .addCase(getComments.pending, (state, action) => {
        state.comments_loading = true;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.comments_loading = false;
        state.comments_error = action.error.message;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        const payload = action.payload;

        if (typeof payload === "string") {
          console.log(payload);
        } else {
          const { comments, posts_key, postId } = payload;

          const indexOfSelectedPost = state.posts[posts_key].findIndex(
            (post) => post.postId === postId
          );
          state.posts[posts_key][indexOfSelectedPost].comments = comments;
          state.comments_loading = false;
        }
      });
  },
});

export const selectCommentsState = (state: RootState) => state.comments;

export const { cacheLoadedUserAndPosts, openClose } = commentsSlice.actions;
