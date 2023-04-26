"use client";

import { ReactNode, useContext } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import styles from "./ThemeWrapper.module.scss";

type Props = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${styles.container} ${
          theme === "light" ? styles.light : styles.dark
        }`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default ThemeWrapper;
