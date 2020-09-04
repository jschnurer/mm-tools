import React from 'react';
import "./PageLayout.scoped.scss";

interface IPageLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children, header, footer }) =>
  <div className="page-layout">
    {header &&
      <div className="page-header">
        {header}
      </div>
    }
    <div className="page-body">
      {children}
    </div>
    {footer &&
      <div className="page-footer">
        {footer}
      </div>
    }
  </div>;

export default PageLayout;
