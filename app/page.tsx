import styles from './page.module.scss';

//Components
import CharactersTable from '@components/CharactersTable/CharactersTable';

export default function Home() {
  return (
    <main className={styles.main}>
      <CharactersTable />
    </main>
  );
}
