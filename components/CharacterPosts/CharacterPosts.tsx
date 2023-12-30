"use client";

import { useEffect } from "react";

//Styles
import styles from "./Styles.module.scss";

//Components
import Comments from "@components/Comments/Comments";

//Redux
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import {
  selectCommentsState,
  cacheLoadedUserAndPosts,
  openClose,
  getComments,
} from "@redux/slices//commentsSlice";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts_without_comments: Post[];
  userId: string;
  house: string;
};

const CharacterPosts = ({ posts_without_comments, userId, house }: Props) => {
  const commentsReducer = useAppSelector(selectCommentsState);
  const dispatch = useAppDispatch();

  const user_already_added_to_state = commentsReducer.loaded_users.filter(
    (user) => user.userId === userId
  );

  const posts_key = user_already_added_to_state[0]?.posts_key;

  const { posts: all_posts, loaded_users } = commentsReducer;

  useEffect(() => {
    const user_already_added_to_state = commentsReducer.loaded_users.filter(
      (user) => user.userId === userId
    );

    if (user_already_added_to_state.length !== 0 && all_posts[posts_key])
      return;

    dispatch(cacheLoadedUserAndPosts({ posts_without_comments, userId }));
  }, [all_posts, posts_key]);

  const displayComments = (postId: number, comments: TComment[]) => {
    dispatch(openClose({ posts_key, postId }));
    if (!comments.length) {
      dispatch(getComments({ postId, posts_key }));
    }
  };

  const displayPosts = () => {
    //Don´t show posts if user still not added to global state
    if (user_already_added_to_state.length === 0) return;
    //Don´t show anything if posts are still not in global state
    if (!all_posts[posts_key] || all_posts[posts_key].length === 0) return;

    return (
      <div className={styles.entries_container}>
        {all_posts[posts_key].map((post) => {
          return (
            <div className={styles.entry} key={post.postId}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              {/* Comments */}
              {post.comments_open ? (
                <Comments comments={post.comments} />
              ) : null}
              <button
                onClick={() => {
                  displayComments(post.postId, post.comments);
                }}
                className={`${styles[house]} ${styles.show_comments_btn}`}
              >
                {post.comments_open ? "Hide comments" : "Show comments"}
              </button>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <h3>Blog entries</h3>
      {displayPosts()}
    </div>
  );
};

export default CharacterPosts;
