import { useState } from "react";

//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppDispatch } from "@redux/hooks";
import { setNextPage, addOneCorrectAnswer } from "@redux/slices/quizSlice";

//Components
import AnimatedBorderImg from "../AnimatedBorderImg/AnimatedBorderImg";

type movie_options =
  | "Harry Potter and the Philosopher's Stone"
  | "Harry Potter and the Chamber of Secrets"
  | "Harry Potter and the Prisoner of Azkaban"
  | "Harry Potter and the Goblet of Fire"
  | "Harry Potter and the Order of the Phoenix"
  | "Harry Potter and the Half-Blood Prince"
  | "Harry Potter and the Deathly Hallows - Part 1"
  | "Harry Potter and the Deathly Hallows - Part 2";

type Props = {
  option1: movie_options;
  option2: movie_options;
  option3: movie_options;
  option4: movie_options;
  right_option: movie_options;
  gif_src: string;
  gif_alt_title: string;
  question_number: number;
};

const QuestionPage = ({
  option1,
  option2,
  option3,
  option4,
  right_option,
  gif_src,
  gif_alt_title,
  question_number,
}: Props) => {
  const dispatch = useAppDispatch();

  const [disabledButtons, setDisabledButtons] = useState<boolean>(false);

  const [opt1Clicked, setOpt1Clicked] = useState<boolean>(false);
  const [opt2Clicked, setOpt2Clicked] = useState<boolean>(false);
  const [opt3Clicked, setOpt3Clicked] = useState<boolean>(false);
  const [opt4Clicked, setOpt4Clicked] = useState<boolean>(false);

  const [right, setRight] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const handleAnswer = (e: React.MouseEvent<HTMLLIElement>) => {
    setDisabledButtons(true);
    const elementId = e.currentTarget.id;
    const elementText = e.currentTarget.textContent;

    if (elementId === "opt1") setOpt1Clicked(true);
    if (elementId === "opt2") setOpt2Clicked(true);
    if (elementId === "opt3") setOpt3Clicked(true);
    if (elementId === "opt4") setOpt4Clicked(true);

    if (elementText === right_option) {
      setRight(true);
      dispatch(addOneCorrectAnswer());
    }
    if (elementText !== right_option) setWrong(true);

    setTimeout(() => {
      dispatch(setNextPage());
    }, 1500);
  };

  const alreadeAnswered = () => {
    //Nothing will happen, this will just avoid that user is able to trigger the handleAnswer function again while waiting to get the next answer
  };

  return (
    <div
      className={`${styles.container} ${
        disabledButtons ? styles.fadeOut : null
      }`}
    >
      <h2 className={styles.title}>
        Which movie is this?<span>{question_number}/20</span>
      </h2>
      <br />
      <AnimatedBorderImg src={gif_src} alt={gif_alt_title} />
      <br />
      <ul className={styles.options}>
        <li
          id="opt1"
          onClick={disabledButtons ? alreadeAnswered : handleAnswer}
          className={`${opt1Clicked && right ? styles.right : null} ${
            opt1Clicked && wrong ? styles.wrong : null
          }`}
        >
          {option1}
        </li>
        <li
          id="opt2"
          onClick={disabledButtons ? alreadeAnswered : handleAnswer}
          className={`${opt2Clicked && right ? styles.right : null} ${
            opt2Clicked && wrong ? styles.wrong : null
          }`}
        >
          {option2}
        </li>
        <li
          id="opt3"
          onClick={disabledButtons ? alreadeAnswered : handleAnswer}
          className={`${opt3Clicked && right ? styles.right : null} ${
            opt3Clicked && wrong ? styles.wrong : null
          }`}
        >
          {option3}
        </li>
        <li
          id="opt4"
          onClick={disabledButtons ? alreadeAnswered : handleAnswer}
          className={`${opt4Clicked && right ? styles.right : null} ${
            opt4Clicked && wrong ? styles.wrong : null
          }`}
        >
          {option4}
        </li>
      </ul>
    </div>
  );
};

export default QuestionPage;
