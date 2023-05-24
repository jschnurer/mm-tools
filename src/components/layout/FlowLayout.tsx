import React from 'react';
import styles from "./FlowLayout.module.scss";

interface IFlowLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: React.ReactNode,
}

const FlowLayout: React.FC<IFlowLayoutProps> = ({ children, header, footer }) =>
  <div className={styles["page-layout"]}>
    {header &&
      <div className={styles["page-header"]}>
        {header}
      </div>
    }
    <div className={styles["page-body"]}>
      {children}
    </div>
    {footer &&
      <div className={styles["page-footer"]}>
        {footer}
      </div>
    }
  </div>;

export default FlowLayout;
