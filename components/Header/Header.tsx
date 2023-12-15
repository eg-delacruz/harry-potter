import Link from 'next/link';
import Image from 'next/image';

//Assets
import HP from '@assets/images/HP_logo.svg';

//Styles
import styles from './Styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>Characters</Link>
      <div className={styles.logo_container}>
        <Image src={HP} alt='Harry Potter Logo' width={100} />
      </div>
      <Link className={styles.quiz_link} href='/quiz'>
        Quiz
      </Link>
    </header>
  );
};

export default Header;
