import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardProps = {
  children?: ReactNode;
  maxWidth?: string | number;
};

const Card: FC<CardProps> = ({ children, maxWidth = 360 }) => (
  <div className={styles.card} style={{ maxWidth }}>
    {children}
  </div>
);

export default Card;
