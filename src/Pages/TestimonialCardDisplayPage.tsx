import GoHomeButton from "../components/GoHomeButton";
import TestimonialCard from "../components/TestimonialCard";
import styles from "./styling/TestimonialCardDisplayPageStyles.module.css";
import React from "react";

function TestimonialCardDisplayPage() {
  return (
    <>
      <div className={styles.pageContainer}>
        <TestimonialCard />
      </div>
    </>
  );
}

export default TestimonialCardDisplayPage;
