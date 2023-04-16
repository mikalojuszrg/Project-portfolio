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
      <div className={styles.container__logo}>
        <Letter />
        <span className={styles.container__text}>ikalojus</span>
      </div>
      <a href="" className={styles.container__about}>
        About
      </a>
      {theme === "light" ? (
        <FaMoon onClick={handleMoonClick} />
      ) : (
        <FaSun onClick={handleSunClick} />
      )}
    </header>
  );
};

export default Header;
