import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Layout.module.css";

export type LayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  toolbar?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ header, sidebar, children, toolbar }) => {
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
          {header}
          {sidebar}
        </nav>
      )}
      {!showSidebar && header}
      <main className={contentStyles}>{children}</main>
      {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
    </div>
  );
};

export default Layout;
