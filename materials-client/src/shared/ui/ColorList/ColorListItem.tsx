import { FC } from "react";
import styles from "./ColorListItem.module.css";
import cn from "classnames";

export type ColorListItemProps = {
  title: string;
  color: string;
  active: boolean;
};

const ColorListItem: FC<ColorListItemProps> = ({ title, color, active }) => {
  const listItemClassname = cn(
    styles.colorListItem,
    active && styles.colorListItemActive
  );

  return (
    <li className={listItemClassname}>
      <div
        className={styles.colorRound}
        style={{ backgroundColor: color }}
      ></div>
      <div className={styles.title}>{title}</div>
    </li>
  );
};

export default ColorListItem;
