//Styles
import styles from "./Styles.module.scss";

const loading = () => {
  return (
    <div className={styles.loader_container}>
      <p>Loading character data</p>
      <div className={styles.loader}></div>
    </div>
  );
};

export default loading;
