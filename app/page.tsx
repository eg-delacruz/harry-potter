import styles from './page.module.scss';

//Components
import Test from '@components/Test';

export default function Home() {
  return (
    <main className={styles.main}>
      <Test />
      <h1>Hola</h1>
      <h2>Hola</h2>
      <h3>Hola</h3>
    </main>
  );
}
