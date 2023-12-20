'use client';

import { useEffect } from 'react';

//Styles
import styles from './Styles.module.scss';

//Redux
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import {
  selectCommentsState,
  createInitialStructure,
} from '@redux/slices//commentsSlice';
import { type } from 'os';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts_without_comments: Post[];
  userId: string;
};

//TODO: usar redux para traer los comments de los posts client-side
const CharacterPosts = ({ posts_without_comments, userId }: Props) => {
  const commentsReducer = useAppSelector(selectCommentsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createInitialStructure({ posts_without_comments, userId }));
  }, []);

  console.log({ commentsReducer });

  const { posts: all_posts, loaded_users } = commentsReducer;

  const user_already_added_to_state = commentsReducer.loaded_users.filter(
    (user) => user.userId === userId
  );

  const posts_key = user_already_added_to_state[0]?.posts_key;
  //console.log({ posts_key });

  const displayPosts = () => {
    //Don´t show posts if user still not added to global state
    if (user_already_added_to_state.length === 0) return;
    //Don´t show anything if posts are still not in global state
    if (!all_posts[posts_key] || all_posts[posts_key].length === 0) return;
    return <div>Hola</div>;
  };
  return (
    <div className={styles.container}>
      <h3>Blog entries</h3>
      {displayPosts()}
    </div>
  );
};

export default CharacterPosts;
