import { HTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({
  children = "Default text",
  variant = "primary",
  ...props
}: Props) => {
  const variantClassName = () => {
    if (variant === "primary") {
      return styles.primary;
    } else {
      return styles.secondary;
    }
  };
  return (
    <button className={variantClassName()} {...props}>
      {children}
    </button>
  );
};

export default Button;
