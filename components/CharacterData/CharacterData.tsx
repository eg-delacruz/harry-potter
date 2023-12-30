import Image from "next/image";

//Styles
import styles from "./Styles.module.scss";

//Assets
import black_wand from "@assets/icons/black_wand.svg";

//Components
import LazyImage from "@components/LazyImage/LazyImage";

type Props = {
  characterData: TCharacter;
};

const CharacterData = ({ characterData }: Props) => {
  const {
    image,
    name,
    house,
    alternate_names,
    species,
    wizard,
    dateOfBirth,
    alive,
    ancestry,
    patronus,
    gender,
    eyeColour,
    hairColour,
    hogwartsStudent,
    hogwartsStaff,
    actor,
    alternate_actors,
    wand,
  } = characterData;

  const firstCapital = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.picture_section}>
          <div className={`${styles.image_container} ${styles[house]}`}>
            <LazyImage
              src={
                image
                  ? image
                  : `https://api.dicebear.com/7.x/lorelei/svg?seed=${name.replace(
                      /\s+/g,
                      ""
                    )}`
              }
              alt={`Image of ${name}`}
            />
          </div>
        </section>

        <section className={styles.general_info_section}>
          <h1>{name}</h1>
          <ul>
            {alternate_names.length > 0 ? (
              <>
                <li>
                  <strong>Alternate names: </strong>
                  {alternate_names.map((name, index) => {
                    return (
                      <span key={index}>
                        {name}
                        {index === alternate_names.length - 1 ? "" : ", "}
                      </span>
                    );
                  })}
                </li>
              </>
            ) : null}
            <li>
              <strong>Date of birth: </strong>
              {dateOfBirth ? dateOfBirth.toString() : "Unknown"}
            </li>
            <li>
              <strong>Species: </strong>
              {firstCapital(species)}
            </li>
            <li>
              <strong>Wizard: </strong>
              {wizard ? "True" : "False"}
            </li>
            <li>
              <strong>Alive: </strong>
              {alive ? "True" : "False"}
            </li>
            {ancestry ? (
              <li>
                <strong>Ancestry: </strong>
                {firstCapital(ancestry)}
              </li>
            ) : null}
            {patronus ? (
              <li>
                <strong>Patronus: </strong>
                {firstCapital(patronus)}
              </li>
            ) : null}
          </ul>
        </section>

        <section className={styles.physical_info_section}>
          <h3>Physical characteristics</h3>
          <ul>
            <li>
              <strong>Gender: </strong>
              {gender}
            </li>
            {eyeColour ? (
              <li>
                <strong>Eye colour: </strong>
                {eyeColour}
              </li>
            ) : null}
            {hairColour ? (
              <li>
                <strong>Hair colour: </strong>
                {hairColour}
              </li>
            ) : null}
          </ul>
        </section>

        <section className={styles.hogwarts_section}>
          <h3>Relationship with Hogwarts</h3>
          <ul>
            <li>
              <strong>House: </strong>
              {house ? house : "None"}
            </li>
            <li>
              <strong>Hogwarts student: </strong>
              {hogwartsStudent ? "True" : "False"}
            </li>
            <li>
              <strong>Hogwarts staff: </strong>
              {hogwartsStaff ? "True" : "False"}
            </li>
          </ul>
        </section>

        {wand.wood || wand.core || wand.length ? (
          <section className={styles.wand_section}>
            <h3>Magic wand</h3>
            <Image src={black_wand} alt="Black wand image" width={140} />
            <div className={styles.wand_components}>
              <div>
                <strong>wood</strong>
                <div>{wand.wood}</div>
              </div>
              <div>
                <strong>core</strong>
                <div>{wand.core}</div>
              </div>
              <div>
                <strong>length</strong>
                <div>{wand.length}</div>
              </div>
            </div>
          </section>
        ) : null}

        <section>
          <h3>Movies</h3>
          <ul>
            <li>
              <strong>Actor: </strong>
              {actor}
            </li>
            {alternate_actors.length > 0 ? (
              <li>
                <strong>Alternate actors: </strong>
              </li>
            ) : null}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CharacterData;
