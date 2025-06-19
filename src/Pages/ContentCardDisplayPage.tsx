import { useEffect } from "react";
import ContentCard from "../components/ContentCard";
import Styles from "./styling/ContentCardDisplayPageStyles.module.css";

function ContentCardDisplayPage() {
  const pillText = "Interior";
  const titleText = "Top 5 Living Room Inspirations";
  const contentText =
    "Curated vibrant colours for your living, make it pop & calm in the same time.";

  return (
    <div className={Styles.contentCard}>
      <ContentCard
        pillText={pillText}
        titleText={titleText}
        contentText={contentText}
        link="https://localhost:5173"
      />
    </div>
  );
}

export default ContentCardDisplayPage;
