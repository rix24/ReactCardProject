import { Outlet } from "react-router-dom";
import Styles from "./styling/HeaderStyles.module.css";
import GoHomeButton from "../components/GoHomeButton";

function Layout() {
  return (
    <div>
      <header className={Styles.header}>
        <span className={Styles.headerElement}>Header test</span>
        <div className={Styles.goHomeButton}>
          <GoHomeButton />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
