import Image from "next/image";

//Styles
import styles from "./Styles.module.scss";

//Assets
import user_icon from "@assets/icons/user.svg";

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
    <ul className={styles.container}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image src={user_icon} alt={comment.name} />

          <div className={styles.name_body_container}>
            <b>{comment.name}</b>
            <p>{comment.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
