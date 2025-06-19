import Styles from "./styling/TestimonialCard.module.css";
import profileThumbnail from "../assets/profileThumbnail.png";

function TestimonialCard() {
  return (
    <div className={Styles.contentContainer}>
      <div className={Styles.header}>
        <img
          src={profileThumbnail}
          alt="Profile Thumbnail"
          style={{ maxWidth: "60px" }}
        />
        <div className={Styles.headerText}>
          <span style={{ fontWeight: "bold" }}>Sarah Dole</span>
          <span style={{ fontSize: "12px" }}>@sarahdole</span>
        </div>
      </div>
      <div className={Styles.contentText}>
        <span>test text</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
