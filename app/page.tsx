"use client";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { Inter } from "next/font/google";
import { ThemeContext } from "./contexts/ThemeContext";
import styles from "./page.module.scss";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <Header />
      <HeroSection />
    </div>
  );
}
