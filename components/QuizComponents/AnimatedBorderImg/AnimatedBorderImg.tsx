// Styles
import styles from "./Styles.module.scss";

type Props = {
  src: string;
  alt: string;
};

const AnimatedBorderImg = ({ src, alt }: Props) => {
  return (
    <div className={styles.animated_border}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default AnimatedBorderImg;
