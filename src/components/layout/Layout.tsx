import IParent from 'IParent';
import React from 'react';
import styles from "./Layout.module.scss";
import MainMenu from './MainMenu';

const Layout: React.FC<IParent> = ({ children }) =>
  <div className={styles.site}>
    <MainMenu />
    <div className={styles["page-content"]}>
      {children}
    </div>
  </div>;

export default Layout;
