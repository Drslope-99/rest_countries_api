import React, { useState, useMemo } from "react";
import styles from "./DropdownMenu.module.css";
import { PiCaretDownBold } from "react-icons/pi";

function DropdownMenu({ countries, region, setRegion }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const regions = useMemo(() => {
    return [...new Set(countries.map((c) => c.region))];
  }, [countries]);

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

export default React.memo(DropdownMenu);
