import styles from "./SearchInput.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchInput({ value, onSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="search">
          <IoSearch className={styles.searchIcon} />
        </label>
        <input
          type="text"
          className={styles.formSearchInput}
          id="search"
          placeholder="Search for a country..."
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
