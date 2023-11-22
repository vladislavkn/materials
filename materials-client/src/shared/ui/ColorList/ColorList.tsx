import { FC, ReactNode } from "react";
import styles from "./ColorList.module.css";

type ColorListProps = {
  children: ReactNode;
};

const ColorList: FC<ColorListProps> = ({ children }) => (
  <ul className={styles.colorList}>{children}</ul>
);

export default ColorList;
