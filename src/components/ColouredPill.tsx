import Styles from "./ColouredPillStyles.module.css";

function ColouredPill({ text }: { text: string }) {
  return (
    <span
      className={Styles.colouredPill}
      style={{ backgroundColor: "rgba(112, 238, 73, 0.2)" }}
    >
      {text}
    </span>
  );
}
export default ColouredPill;
