import styles from "./SearchComponents.module.css";

export default function SearchComponents({ children }) {
  return <div className={styles.container}>{children}</div>;
}
