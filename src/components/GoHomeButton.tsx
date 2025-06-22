import { useNavigate } from "react-router-dom";
import Styles from "./styling/GoHomeButtonStyles.module.css";

function GoHomeButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={Styles.ButtonContainer}>
      <button onClick={handleClick} className={Styles.button}>
        <span style={{ fontWeight: "bold" }}>Return to Home page</span>
      </button>
    </div>
  );
}

export default GoHomeButton;
