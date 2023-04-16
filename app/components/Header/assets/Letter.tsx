import { ThemeContext } from "@/app/contexts/ThemeContext";
import styles from "./Letter.module.scss";
import { useContext } from "react";

const Letter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
      className={styles.svg}
    >
      <path
        d="M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zm9.39 31.06h24.77l9.43 36.97 9.46-36.97H95.6v60.76H80.24V45.5L68.38 91.82H54.47L42.64 45.5v46.32H27.28V31.06z"
        fillRule="evenodd"
        clipRule="evenodd"
        className={theme === "light" ? styles.svg__sun : styles.svg__moon}
      />
    </svg>
  );
};

export default Letter;
