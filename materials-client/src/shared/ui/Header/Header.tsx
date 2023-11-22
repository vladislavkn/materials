import { FC } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const APPS_URL = import.meta.env.VITE_APPS_URL;

const Header: FC = () => (
  <header className={styles.header}>
    <Heading>Materials</Heading>
    <Button variant="text" as="a" href={APPS_URL}>
      See all applications
    </Button>
  </header>
);

export default Header;
