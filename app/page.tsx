import styles from './page.module.scss';

//Components
import CharactersTable from '@components/CharactersTable/CharactersTable';

const getAllCharacters = async () => {
  const res = await fetch('https://hp-api.onrender.com/api/characters');

  if (!res.ok) {
    throw new Error('Error while fetching characters data');
  }
  const data = await res.json();

  //Return just the first 200 characters
  return data.slice(0, 200);
};

export default async function Home() {
  const characters = await getAllCharacters();

  return (
    <main className={styles.main}>
      <CharactersTable characters={characters} />
    </main>
  );
}
