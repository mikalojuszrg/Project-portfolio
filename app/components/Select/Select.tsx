"use client";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Select.module.scss";
import { useContext } from "react";

export interface Posts {
  handleSortChange: (selectedValue: string) => void;
}

const Select = ({ handleSortChange }: Posts) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <label htmlFor="date" className={styles.label}>
        Sort by date:
      </label>
      <select
        className={`${styles.select} ${
          theme === "light" ? styles.select__sun : styles.select__moon
        }`}
        name="Sort by date"
        id="date"
        onChange={(event) => handleSortChange(event.target.value)}
        defaultValue="sort"
        aria-label="Sort by date"
        title="Sort by date"
      >
        <option disabled value="sort" hidden>
          Sort by
        </option>
        <option value="byDateDsc">Date: old to new</option>
        <option value="byDateAsc">Date: new to old</option>
      </select>
    </div>
  );
};

export default Select;
