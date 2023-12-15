//Styles
import styles from './Styles.module.scss';

//Components
import CharacterCard from '@components/CharacterCard/CharacterCard';

const getAllCharacters = async () => {
  const res = await fetch('https://hp-api.onrender.com/api/characters');

  if (!res.ok) {
    throw new Error('Error while fetching characters data');
  }
  const data = await res.json();

  //Return just the first 20 characters
  return data.slice(0, 200);
};

const CharactersTable = async () => {
  const characters = await getAllCharacters();

  return (
    <div className={styles.container}>
      {characters.map((character: TCharacter) => (
        <CharacterCard key={character.id} {...character} id={character.id} />
      ))}
    </div>
  );
};

export default CharactersTable;
