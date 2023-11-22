import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Layout.module.css";
import Header from "../Header/Header";

export type LayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
  toolbar?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ sidebar, children, toolbar }) => {
  const showSidebar = !!sidebar;
  const layoutStyles = cn(
    styles.layout,
    showSidebar && styles.layoutWithSidebar
  );
  const contentStyles = cn(
    styles.content,
    showSidebar && styles.contentWithSidebar
  );

  return (
    <div className={layoutStyles}>
      {showSidebar && (
        <nav className={styles.sidebar}>
          <Header />
          {sidebar}
        </nav>
      )}
      {!showSidebar && <Header />}
      <main className={contentStyles}>{children}</main>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
    </div>
  );
};

export default Layout;
