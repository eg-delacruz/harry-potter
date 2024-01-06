"use client";

//Redux
import { useAppSelector } from "@redux/hooks";
import { selectQuizState } from "@redux/slices/quizSlice";

//Components
import Cover from "@components/QuizComponents/Cover/Cover";
import TestComponents from "@components/QuizComponents/TestComponents/TestComponents";
import Result from "@components/QuizComponents/Result/Result";

const Quiz = () => {
  const quizReducer = useAppSelector(selectQuizState);
  const {
    Test1,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7,
    Test8,
    Test9,
    Test10,
    Test11,
    Test12,
    Test13,
    Test14,
    Test15,
    Test16,
    Test17,
    Test18,
    Test19,
    Test20,
  } = TestComponents;

  return (
    <>
      {quizReducer.page === 0 && <Cover />}

      {quizReducer.page === 1 && <Test1 />}
      {quizReducer.page === 2 && <Test2 />}
      {quizReducer.page === 3 && <Test3 />}
      {quizReducer.page === 4 && <Test4 />}
      {quizReducer.page === 5 && <Test5 />}
      {quizReducer.page === 6 && <Test6 />}
      {quizReducer.page === 7 && <Test7 />}
      {quizReducer.page === 8 && <Test8 />}
      {quizReducer.page === 9 && <Test9 />}
      {quizReducer.page === 10 && <Test10 />}
      {quizReducer.page === 11 && <Test11 />}
      {quizReducer.page === 12 && <Test12 />}
      {quizReducer.page === 13 && <Test13 />}
      {quizReducer.page === 14 && <Test14 />}
      {quizReducer.page === 15 && <Test15 />}
      {quizReducer.page === 16 && <Test16 />}
      {quizReducer.page === 17 && <Test17 />}
      {quizReducer.page === 18 && <Test18 />}
      {quizReducer.page === 19 && <Test19 />}
      {quizReducer.page === 20 && <Test20 />}

      {quizReducer.page === 21 && <Result />}
    </>
  );
};

export default Quiz;
