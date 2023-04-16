"use client";

import Header from "./components/Header/Header";
import { Inter } from "next/font/google";
import { ThemeContext } from "./contexts/ThemeContext";
import styles from "./page.module.scss";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main className={theme === "light" ? styles.light : styles.dark}>
        asdasd
      </main>
    </>
  );
}
