"use client";

import { FaMoon, FaSun } from "react-icons/fa";

import Letter from "./assets/Letter";
import Link from "next/link";
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
    <header className={styles.container}>
      <div className={styles.container__left}>
        <Link href="/">
          <div className={styles.container__logo}>
            <Letter />
            <span
              className={
                theme === "light"
                  ? styles.container__textsun
                  : styles.container__textmoon
              }
            >
              ikalojus
            </span>
          </div>
        </Link>
        <Link
          href="/about"
          className={`${styles.container__about} ${
            theme === "light" ? styles.container__moon : styles.container__sun
          }`}
        >
          About
        </Link>
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
