import spaceJoy from "../assets/spacejoy.jpg";
import styles from "./ContentCardStyles.module.css";

function ContentCard() {
  return (
    <div className={styles.contentCard}>
      <h1>Content Card</h1>
      <img src={spaceJoy} className={styles.contentImage}></img>
    </div>
  );
}

export default ContentCard;
