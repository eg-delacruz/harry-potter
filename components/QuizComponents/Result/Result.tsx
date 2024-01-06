//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setPageTo0, resetCorrectAnswers } from "@redux/slices/quizSlice";
import { selectQuizState } from "@redux/slices/quizSlice";

//Components
import AnimatedBorderImg from "../AnimatedBorderImg/AnimatedBorderImg";

const Result = () => {
  const quizReducer = useAppSelector(selectQuizState);
  const dispatch = useAppDispatch();

  const displayImageAndText = () => {
    const Score = () => (
      <p className={styles.score}>
        Your score: {quizReducer.correctAnswers} out of 20
      </p>
    );

    //0 - 11 correct answers
    if (quizReducer.correctAnswers >= 0 && quizReducer.correctAnswers <= 11) {
      return (
        <>
          <AnimatedBorderImg
            src="https://media0.giphy.com/media/720g7C1jz13wI/giphy.gif?cid=3640f6095c869951776a4a7a5110b5dc"
            alt="Disappointed Dumbledore"
          />
          <Score />
          <p>Dumbledore thinks you could do better...</p>
        </>
      );
    }

    //12 - 15 correct answers
    if (quizReducer.correctAnswers >= 12 && quizReducer.correctAnswers <= 15) {
      return (
        <>
          <AnimatedBorderImg
            src="https://media2.giphy.com/media/UeeJAeey9GJjO/giphy.gif?cid=3640f6095c869e703631634241b759c1"
            alt="Hermione clapping"
          />
          <Score />
          <p>Hermione is impressed...</p>
        </>
      );
    }

    //16 - 19 correct answers
    if (quizReducer.correctAnswers >= 16 && quizReducer.correctAnswers <= 19) {
      return (
        <>
          <AnimatedBorderImg
            src="https://media.giphy.com/media/TGLLaCKWwxUVq/giphy.gif"
            alt="Snape clapping"
          />
          <Score />
          <p>Very good!</p>
          <p>Give it another try and you will get full marks</p>
        </>
      );
    }

    //20 correct answers
    if (quizReducer.correctAnswers === 20) {
      return (
        <>
          <AnimatedBorderImg
            src="https://media.giphy.com/media/9H279yb0blggo/giphy.gif"
            alt="Dumbledore clapping"
          />
          <Score />
          <p>Excellent!</p>
          <p>You have reached excellence and made Dumbledore proud</p>
        </>
      );
    }
  };

  return (
    <div className="quiz_questions_container">
      <h1>Results</h1>
      <br />
      <br />
      {displayImageAndText()}
      <br />
      <button
        onClick={() => {
          dispatch(setPageTo0());
          dispatch(resetCorrectAnswers());
        }}
        className={`btn btn__gryffindor`}
      >
        Restart quiz
      </button>
    </div>
  );
};

export default Result;
