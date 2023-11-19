import { FC, HTMLProps, createElement } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export type ButtonProps = {
  children?: string | number | null;
  variant?: "primary" | "secondary" | "text";
  href?: string;
} & HTMLProps<HTMLButtonElement | HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  ...elementProps
}) => {
  const tag = href ? "a" : "button";
  const className = cn(styles.button, styles[`${variant}Button`]);
  return createElement(tag, { className, ...elementProps }, children);
};

export default Button;
