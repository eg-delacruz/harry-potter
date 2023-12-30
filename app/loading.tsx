//Styles
import styles from "./page.module.scss";

const loading = () => {
  return (
    <div className={styles.loader_container}>
      <p>Loading...</p>
      <div className={styles.loader}></div>
    </div>
  );
};

export default loading;
