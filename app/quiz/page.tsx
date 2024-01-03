"use client";

//Redux
import { useAppSelector } from "@redux/hooks";
import { selectQuizState } from "@redux/slices/quizSlice";

//Components
import Cover from "@components/QuizComponents/Cover/Cover";
import Test1 from "@components/QuizComponents/Test1/Test1";
import Test2 from "@components/QuizComponents/Test2/Test2";

const Quiz = () => {
  const quizReducer = useAppSelector(selectQuizState);

  return (
    <>
      {quizReducer.page === 0 && <Cover />}{" "}
      {quizReducer.page === 1 && <Test1 />}
    </>
  );
};

export default Quiz;
