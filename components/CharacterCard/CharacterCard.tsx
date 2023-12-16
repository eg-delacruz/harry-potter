//Styles
import Link from 'next/link';
import styles from './Styles.module.scss';

//Components
import LazyImage from '@components/LazyImage/LazyImage';

type Props = {
  id: string;
  name: string;
  species: string;
  house: string;
  dateOfBirth: Date | null;
  image: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  alive: boolean;
};

//TODO: Add an icon to show that you can go to the character page
const CharacterCard = ({
  id,
  name,
  species,
  house = '',
  dateOfBirth,
  image,
  hogwartsStudent,
  hogwartsStaff,
  alive,
}: Props) => {
  return (
    <Link className={`${styles.container}`} href={`/character/${id}`}>
      <div className={`${styles.card} ${styles[house]}`}>
        <div className={styles.card__image_container}>
          <LazyImage
            src={
              image
                ? image
                : `https://api.dicebear.com/7.x/lorelei/svg?seed=${name.replace(
                    /\s+/g,
                    ''
                  )}`
            }
            alt={`Image of ${name}`}
          />
        </div>
        <div className={styles.card__content}>
          <h2>{name}</h2>
          <p>
            <strong>Species: </strong>
            {species}
          </p>
          <p>
            <strong>Alive: </strong>
            {alive ? 'True' : 'False'}
          </p>
          <p>
            <strong>Hogwarts student: </strong>
            {hogwartsStudent ? 'True' : 'False'}
          </p>
          <p>
            <strong>Hogwarts staff: </strong>
            {hogwartsStaff ? 'True' : 'False'}
          </p>
          {house ? (
            <p>
              <strong>House: </strong>
              {house}
            </p>
          ) : (
            <></>
          )}
          <p>
            <strong>Date of birth: </strong>
            {dateOfBirth ? dateOfBirth.toString() : 'Unknown'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
