import Image from "next/image";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import picture from "./assets/profile.jpeg";
import styles from "./HeroSection.module.scss";
import { useContext } from "react";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={styles.container}>
      <div className={styles.container__left}>
        <h1
          className={
            theme === "light"
              ? styles.container__headingSun
              : styles.container__headingMoon
          }
        >
          I am{" "}
          <span
            className={
              theme === "light"
                ? styles.container__nameSun
                : styles.container__nameMoon
            }
          >
            Mikalojus{" "}
          </span>
          👋
        </h1>
        <p
          className={
            theme === "light"
              ? styles.container__descriptionSun
              : styles.container__descriptionMoon
          }
        >
          Front end developer, making accessible user-facing web apps
        </p>
      </div>
      <div className={styles.container__right}>
        <Image
          src={picture}
          alt="profile"
          className={styles.container__image}
        />
      </div>
    </section>
  );
};

export default HeroSection;
