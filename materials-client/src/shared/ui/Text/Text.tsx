import cn from "classnames";
import { FC, HTMLProps, createElement } from "react";
import styles from "./Text.module.css";

export type TextProps = {
  children?: string | number | null;
  variant?: "body" | "muted" | "error";
  as?: keyof HTMLElementTagNameMap;
} & HTMLProps<HTMLElement>;

const Text: FC<TextProps> = ({
  children,
  variant = "body",
  as = "p",
  ...elementProps
}) => {
  const className = cn(styles.text, styles[`${variant}Text`]);

  return createElement(as, { className, ...elementProps }, children);
};

export default Text;
