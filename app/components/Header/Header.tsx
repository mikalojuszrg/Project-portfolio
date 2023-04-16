"use client";

import { FaMoon, FaSun } from "react-icons/fa";

import Letter from "./assets/Letter";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import styles from "./Header.module.scss";
import { useContext } from "react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSunClick = () => {
    setTheme("light");
  };

  const handleMoonClick = () => {
    setTheme("dark");
  };

  return (
    <header
      className={`${styles.container} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.container__left}>
        <div className={styles.container__logo}>
          <Letter />
          <span className={styles.container__text}>ikalojus</span>
        </div>
        <a href="" className={styles.container__about}>
          About
        </a>
      </div>
      <div className={styles.container__right}>
        {theme === "light" ? (
          <FaMoon
            onClick={handleMoonClick}
            className={`${styles.container__icon} ${styles.container__moon}`}
          />
        ) : (
          <FaSun
            onClick={handleSunClick}
            className={`${styles.container__icon} ${styles.container__sun}`}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
