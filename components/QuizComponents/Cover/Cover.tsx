//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppDispatch } from "@redux/hooks";
import { setNextPage } from "@redux/slices/quizSlice";

const Cover = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="quiz_questions_container">
        <h1>
          How well do you know <br /> the Harry Potter movies?
        </h1>
        <p>Picture here</p>
        <button
          onClick={() => {
            dispatch(setNextPage());
          }}
        >
          Start
        </button>
      </div>

      <footer className={styles.footer}>
        GIFs provided by &nbsp;<a href="https://giphy.com/">GIPHY</a>
      </footer>
    </>
  );
};

export default Cover;
