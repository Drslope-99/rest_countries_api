import { IoMoonOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import { IoMoon } from "react-icons/io5";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>Where in the world?</h1>

        <div className={styles.themeControl}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme == "dark" ? (
              <IoMoon className={`${styles.themeIcon} ${styles.icondark}`} />
            ) : (
              <IoMoonOutline className={styles.themeIcon} />
            )}
          </button>
          <span className={styles.themeLabel}>Dark mode</span>
        </div>
      </div>
    </header>
  );
}
