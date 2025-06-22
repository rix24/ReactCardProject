import Styles from "./styling/TestimonialCard.module.css";
import profileThumbnail from "../assets/profileThumbnail.png";
import React from "react";

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
        <span>
          Ive been searching for high quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!{" "}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
