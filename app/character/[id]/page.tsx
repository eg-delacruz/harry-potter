import Link from 'next/link';

//Styles
import styles from './Styles.module.scss';

//Components
import CharacterData from '@components/CharacterData/CharacterData';
import CharacterPosts from '@components/CharacterPosts/CharacterPosts';

type Props = {
  params: {
    id: string;
  };
};

const random_number = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fetchData = async (id: string) => {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const characterData = await res.json();
  const posts_res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${random_number(0, 10)}`
  );
  const posts = await posts_res.json();
  return { characterData, posts };
};

const page = async ({ params }: Props) => {
  const { id } = params;
  const { characterData, posts } = await fetchData(id);
  return (
    <main className={styles.container}>
      <div className={styles.parchment}>
        <Link href={'/'} className={styles.back_icon}>
          🔙
        </Link>
        <CharacterData characterData={characterData[0]} />
        <CharacterPosts posts={posts} />
      </div>
    </main>
  );
};

export default page;
