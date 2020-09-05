import React from 'react';
import "./MenuItem.scoped.scss";
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";

interface IMenuItemProps {
  label: string,
  icon: string,
  url: string,
  onClick?(): void,
  isCollapsed: boolean,
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, icon, url, onClick, isCollapsed }) => {
  let match = useRouteMatch(url);

  if (url) {
    return (
      <Link
        to={url}
        className={`menu-item ${match ? "active" : ""} ${isCollapsed ? "collapsed" : ""}`}
        title={label}
      >
        <img src={icon} alt={label} /> <label>{label}</label>
      </Link>
    );
  } else {
    return (
      <span
        className={`menu-item ${isCollapsed ? "collapsed" : ""}`}
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
