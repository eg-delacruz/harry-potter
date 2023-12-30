"use client";

import { useEffect } from "react";

//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import {
  selectCommentsState,
  cacheLoadedUserAndPosts,
  openClose,
} from "@redux/slices//commentsSlice";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//TODO: type the comments
type Comment = {};

type Props = {
  posts_without_comments: Post[];
  userId: string;
  house: string;
};

//TODO: Mostrar comentarios
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

  //console.log({ commentsReducer });

  //console.log({ posts_key });

  //TODO: Add the comments type after knowing the comment structure
  const displayComments = (comments_key: number, entry_comments: []) => {
    dispatch(openClose());
  };

  const displayPosts = () => {
    //Don´t show posts if user still not added to global state
    if (user_already_added_to_state.length === 0) return;
    //Don´t show anything if posts are still not in global state
    if (!all_posts[posts_key] || all_posts[posts_key].length === 0) return;

    //Comments key is in fact the index/position of the comment in the comments array
    return (
      <div className={styles.entries_container}>
        {all_posts[posts_key].map((post, comments_key) => {
          return (
            <div className={styles.entry} key={post.postId}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              {/* Comments */}
              {post.comments_open ? <>Comentario abierto</> : null}
              <button
                onClick={() => {
                  displayComments(comments_key, post.comments);
                }}
                className={`${styles[house]} ${styles.show_comments_btn}`}
              >
                Show comments
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
