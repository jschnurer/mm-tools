import React from 'react';
import "./FlowLayout.scoped.scss";

interface IFlowLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
}

const FlowLayout: React.FC<IFlowLayoutProps> = ({ children, header, footer }) =>
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

export default FlowLayout;
