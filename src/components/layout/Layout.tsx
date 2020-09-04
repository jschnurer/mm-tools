import React from 'react';
import "./Layout.scoped.scss";
import MainMenu from './MainMenu';

const Layout: React.FC = ({ children }) =>
  <div className="site">
    <MainMenu />
    <div className="page-layout">
      {children}
    </div>
  </div>;

export default Layout;
