import spaceJoy from "../assets/spacejoy.jpg";
import styles from "./ContentCardStyles.module.css";
import ColouredPill from "./ColouredPill";

type ContentCardProps = {
  pillText: string;
  titleText: string;
  contentText: string;
  link: string;
};

function ContentCard({
  pillText,
  titleText,
  contentText,
  link,
}: ContentCardProps) {
  return (
    <div className={styles.contentCard}>
      <img
        src={spaceJoy}
        className={styles.contentImage}
        alt="A showpiece living room"
      ></img>
      <div className={styles.textContainer}>
        <ColouredPill text={pillText} />
        <span className={styles.contentTitle}>{titleText}</span>
        <span className={styles.contentText}>{contentText}</span>
        <a href={link} className={styles.hyperLink}>
          Read more
        </a>
      </div>
    </div>
  );
}

export default ContentCard;
