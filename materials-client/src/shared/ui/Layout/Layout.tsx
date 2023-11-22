import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";

export type LayoutProps = {
  children: ReactNode;
  title: string;
  sidebar?: ReactNode;
  toolbar?: ReactNode;
  sidebarActions?: ReactNode;
};

const Layout: FC<LayoutProps> = ({
  sidebar,
  children,
  toolbar,
  sidebarActions,
  title,
}) => {
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
          <div className={styles.sidebarContent}>
            <header className={styles.sidebarTitle}>
              <Heading level="h2">{title}</Heading>
            </header>
            {sidebar}
          </div>
          <div className={styles.sidebarActions}> {sidebarActions}</div>
        </nav>
      )}
      {!showSidebar && <Header />}
      <main className={contentStyles}>{children}</main>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
    </div>
  );
};

export default Layout;
