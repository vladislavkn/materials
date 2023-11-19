import { FC, HTMLProps, createElement } from "react";
import cn from "classnames";
import styles from "./Heading.module.css";

export type HeadingProps = {
  children?: string | number | null;
  level?: "h1" | "h2" | "h3";
} & HTMLProps<HTMLHeadingElement>;

const Heading: FC<HeadingProps> = ({
  level = "h3",
  children,
  ...headingProps
}) => {
  const className = cn(styles.heading, styles[`${level}Heading`]);
  return createElement(level, { className, ...headingProps }, children);
};

export default Heading;
