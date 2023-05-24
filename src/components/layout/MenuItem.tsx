import classList from 'helpers/styleHelpers';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from "./MenuItem.module.scss";

interface IMenuItemProps {
  label: string,
  icon: string,
  url: string,
  onClick?(): void,
  isCollapsed: boolean,
  matchExact?: boolean,
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, icon, url, onClick, isCollapsed, matchExact }) => {
  let match = useMatch(url);

  if (url) {
    return (
      <Link
        to={url}
        className={classList(styles["menu-item"], match ? styles.active : "", isCollapsed ? styles.collapsed : "")}
        title={label}
      >
        <img src={icon} alt={label} /> <label>{label}</label>
      </Link>
    );
  } else {
    return (
      <span
        className={classList(styles["menu-item"], isCollapsed ? styles.collapsed : "")}
        onClick={onClick}
      >
        {icon &&
          <img src={icon} alt={label} />
        }
        <label>{label}</label>
      </span>
    );
  }
};

export default MenuItem;
