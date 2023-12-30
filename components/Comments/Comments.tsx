//Styles
import styles from "./Styles.module.scss";

//Redux
import { useAppSelector } from "@redux/hooks";
import { selectCommentsState } from "@redux/slices//commentsSlice";

type Props = {
  comments: TComment[];
};

//TODO: add a better loading animation and a better error displayer
const Comments = ({ comments }: Props) => {
  const commentReducer = useAppSelector(selectCommentsState);

  if (commentReducer.comments_error) return "Something went wrong";

  if (commentReducer.comments_loading && !comments.length) return "Loading";

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <b>{comment.name}</b>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
