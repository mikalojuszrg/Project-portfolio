import { ThemeContext } from "@/app/contexts/ThemeContext";
import styles from "./Footer.module.scss";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${styles.container} ${
        theme === "light" ? styles.container__sun : styles.container__moon
      }`}
    >
      Created by Mikalojus Žirgulis
    </footer>
  );
};

export default Footer;
