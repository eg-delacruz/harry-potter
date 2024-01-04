//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppDispatch } from "@redux/hooks";
import { setNextPage } from "@redux/slices/quizSlice";

//Components
import AnimatedBorderImg from "../AnimatedBorderImg/AnimatedBorderImg";

const Cover = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="quiz_questions_container">
        <h1>
          How well do you know <br /> the Harry Potter movies?
        </h1>
        <br />
        <br />
        <AnimatedBorderImg
          src="https://media0.giphy.com/media/Bh3YfliwBZNwk/giphy.gif?cid=3640f6095c852266776c6f746fb2fc67"
          alt="Castillo Hogwarts"
        />
        <br />
        <br />
        <button
          onClick={() => {
            dispatch(setNextPage());
          }}
          className={`btn btn__gryffindor`}
        >
          Start quiz
        </button>
      </div>

      <footer className={styles.footer}>
        GIFs provided by &nbsp;<a href="https://giphy.com/">GIPHY</a>
      </footer>
    </>
  );
};

export default Cover;
