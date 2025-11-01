import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { PiCaretDownBold } from "react-icons/pi";

export default function DropdownMenu({ countries }) {
  const [toggle, setToggle] = useState(false);
  const [region, setRegion] = useState("");

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const regions = [...new Set(countries.map((country) => country.region))];

  return (
    <div className={styles.dropdown} onClick={handleToggle}>
      <button
        className={styles.dropdownTrigger}
        aria-haspopup="listbox"
        aria-expanded="false"
      >
        {region || "Filter by Region"} <PiCaretDownBold />
      </button>
      {toggle && (
        <ul className={styles.dropdownMenu} role="listbox">
          {regions.map((reg) => (
            <li role="option" key={reg} onClick={() => setRegion(reg)}>
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
