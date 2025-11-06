import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "../hook/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.headerLink}>
          <h1>Where in the world?</h1>
        </Link>

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
