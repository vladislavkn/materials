import { FC, HTMLProps, createElement } from "react";
import cn from "classnames";
import styles from "./Heading.module.css";

export type HeadingProps = {
  children?: string | number | null;
  level?: "h1" | "h2" | "h3";
  center?: boolean;
} & HTMLProps<HTMLHeadingElement>;

const Heading: FC<HeadingProps> = ({
  level = "h1",
  children,
  center,
  ...headingProps
}) => {
  const className = cn(
    styles.heading,
    styles[`${level}Heading`],
    center && styles.centerHeading
  );
  return createElement(level, { className, ...headingProps }, children);
};

export default Heading;
