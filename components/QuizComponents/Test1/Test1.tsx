//Components
import QuestionPage from "../QuestionPage/QuestionPage";

const Test1 = () => {
  return (
    <div className="quiz_questions_container">
      <QuestionPage
        gif_src="https://media2.giphy.com/media/qkzMDWfDkYIcE/giphy.gif?cid=ecf05e47iyqvvr78kw7pe2cf9ohhy1qxriyne6irqx0sm3od&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        gif_alt_title="Hermione hugging Ron"
        option1="Harry Potter and the Philosopher's Stone"
        option2="Harry Potter and the Deathly Hallows - Part 2"
        option3="Harry Potter and the Prisoner of Azkaban"
        option4="Harry Potter and the Half-Blood Prince"
        right_option="Harry Potter and the Prisoner of Azkaban"
        question_number={1}
      />
    </div>
  );
};

export default Test1;
