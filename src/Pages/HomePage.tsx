import { Link } from "react-router-dom";
import React from "react"; //needed for test files to work correctly
import { useNavigate } from "react-router-dom";
import Styles from "./styling/HomePageStyles.module.css";

function HomePage() {
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(link);
  };
  return (
    <div
      className="home"
      style={{ alignItems: "center", textAlign: "center", paddingTop: "20px" }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          className={Styles.button}
          onClick={() => handleClick("/contentCardDisplayPage")}
        >
          Go to Content Card Display Page
        </button>
        <button
          className={Styles.button}
          onClick={() => handleClick("/testimonialCardDisplayPage")}
        >
          Go to Testimonial Card Display Page
        </button>
        <button
          className={Styles.button}
          onClick={() => handleClick("/countriesPage")}
        >
          Go to Countries Page
        </button>
      </div>
    </div>
  );
}

export default HomePage;
