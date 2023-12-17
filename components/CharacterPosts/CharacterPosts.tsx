//Styles
import styles from './Styles.module.scss';

type Props = {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
};

//TODO: usar redux para traer los comments de los posts client-side
const CharacterPosts = ({ posts }: Props) => {
  return <div>CharacterPosts</div>;
};

export default CharacterPosts;
