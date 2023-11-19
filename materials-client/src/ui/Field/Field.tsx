import { HTMLProps, forwardRef } from "react";
import styles from "./Field.module.css";

export type FieldProps = HTMLProps<HTMLInputElement>;

const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => (
  <input className={styles.field} ref={ref} {...props} />
));

export default Field;
