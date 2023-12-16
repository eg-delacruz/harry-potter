'use client';

import Image from 'next/image';
import { useState } from 'react';

//Styles
import styles from './Styles.module.scss';

//Components
import CharacterCard from '@components/CharacterCard/CharacterCard';
import CheckBox from '@components/CheckBox/CheckBox';

//Assets
import gryffindor_icon from '@assets/icons/gryffindor.svg';
import slytherin_icon from '@assets/icons/slytherin.svg';
import hufflepuff_icon from '@assets/icons/hufflepuff.svg';
import ravenclaw_icon from '@assets/icons/ravenclaw.svg';

import ron_icon from '@assets/icons/ron.svg';
import hermione_icon from '@assets/icons/hermione.svg';

import wizard_icon from '@assets/icons/wizard.svg';
import muggle_icon from '@assets/icons/muggle.svg';

import dead_icon from '@assets/icons/dead.svg';
import alive_icon from '@assets/icons/alive.svg';

type Props = { characters: TCharacter[] };

const CharactersTable = ({ characters }: Props) => {
  //Checkbox states
  const [gryffindor, setGryffindor] = useState<boolean>(true);
  const [slytherin, setSlytherin] = useState<boolean>(true);
  const [hufflepuff, setHufflepuff] = useState<boolean>(true);
  const [ravenclaw, setRavenclaw] = useState<boolean>(true);
  const [unknownHouse, setUnknownHouse] = useState<boolean>(true);

  const [female, setFemale] = useState<boolean>(true);
  const [male, setMale] = useState<boolean>(true);

  const [dead, setDead] = useState<boolean>(true);
  const [alive, setAlive] = useState<boolean>(true);

  const [wizard, setWizard] = useState<boolean>(true);
  const [noWizard, setNoWizard] = useState<boolean>(true);

  return (
    <>
      <div className={styles.filters_container}>
        {/* /////////////////////////
             //   Houses filters    //
              ///////////////////////// */}

        <div className={styles.houses_filters_container}>
          <h3>Select houses</h3>
          <div className={styles.houses_filters}>
            <CheckBox
              name='Gryffindor'
              boolean={gryffindor}
              setBoolean={setGryffindor}
            >
              <div
                className={`${styles.icon_container} ${styles.gryffindor_icon}`}
              >
                <Image src={gryffindor_icon} alt='Gryffindor icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox
              name='Slytherin'
              boolean={slytherin}
              setBoolean={setSlytherin}
            >
              <div
                className={`${styles.icon_container} ${styles.slytherin_icon}`}
              >
                <Image src={slytherin_icon} alt='Slytherin icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox
              name='Hufflepuff'
              boolean={hufflepuff}
              setBoolean={setHufflepuff}
            >
              <div
                className={`${styles.icon_container} ${styles.hufflepuff_icon}`}
              >
                <Image src={hufflepuff_icon} alt='Hufflepuff icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox
              name='Ravenclaw'
              boolean={ravenclaw}
              setBoolean={setRavenclaw}
            >
              <div
                className={`${styles.icon_container} ${styles.ravenclaw_icon}`}
              >
                <Image src={ravenclaw_icon} alt='Ravenclaw icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox
              name='unknown'
              boolean={unknownHouse}
              setBoolean={setUnknownHouse}
            >
              <div
                className={`${styles.icon_container} ${styles.unknown_icon}`}
              >
                ?
              </div>
            </CheckBox>
          </div>
        </div>

        {/* /////////////////////////
             //   Gender filters    //
              ///////////////////////// */}

        <div className={styles.gender_filters_container}>
          <h3>Select gender</h3>
          <div className={styles.gender_filters}>
            <CheckBox name='Female' boolean={female} setBoolean={setFemale}>
              <div className={`${styles.icon_container} `}>
                <Image src={hermione_icon} alt='Female icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox name='Male' boolean={male} setBoolean={setMale}>
              <div className={`${styles.icon_container} `}>
                <Image src={ron_icon} alt='Male icon' width={45} />
              </div>
            </CheckBox>
          </div>
        </div>

        {/* /////////////////////////
             //   Dead/alive filters    //
              ///////////////////////// */}

        <div className={styles.state_filters_container}>
          <h3>Alive or dead?</h3>
          <div className={styles.state_filters}>
            <CheckBox name='alive' boolean={alive} setBoolean={setAlive}>
              <div className={`${styles.icon_container} `}>
                <Image src={alive_icon} alt='Alive icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox name='dead' boolean={dead} setBoolean={setDead}>
              <div className={`${styles.icon_container} `}>
                <Image src={dead_icon} alt='Dead icon' width={45} />
              </div>
            </CheckBox>
          </div>
        </div>

        {/* /////////////////////////
             //   Wizard filters    //
              ///////////////////////// */}

        <div className={styles.wizard_filters_container}>
          <h3>Wizard or not?</h3>
          <div className={styles.wizard_filters}>
            <CheckBox name='wizard' boolean={wizard} setBoolean={setWizard}>
              <div className={`${styles.icon_container} `}>
                <Image src={wizard_icon} alt='Wizard icon' width={45} />
              </div>
            </CheckBox>
            <CheckBox
              name='no_wizard'
              boolean={noWizard}
              setBoolean={setNoWizard}
            >
              <div className={`${styles.icon_container} `}>
                <Image src={muggle_icon} alt='No-wizard icon' width={25} />
              </div>
            </CheckBox>
          </div>
        </div>

        {/* /////////////////////////
             //   Name filter    //
              ///////////////////////// */}
      </div>

      <div className={styles.characters_container}>
        {characters.map((character: TCharacter) => (
          <CharacterCard key={character.id} {...character} id={character.id} />
        ))}
      </div>
    </>
  );
};

export default CharactersTable;
