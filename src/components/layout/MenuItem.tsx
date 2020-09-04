import React from 'react';
import "./MenuItem.scoped.scss";
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";

interface IMenuItemProps {
  label: string,
  icon: string,
  url: string,
  onClick?(): void,
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, icon, url, onClick }) => {
  let match = useRouteMatch(url);

  if (url) {
    return (
      <Link to={url} className={`menu-item ${match ? "active" : ""}`}>
        <img src={icon} alt={label} /> {label}
      </Link>
    );
  } else {
    return (
      <span
        className="menu-item"
        onClick={onClick}
      >
        {icon &&
          <img src={icon} alt={label} />
        }
        {label}
      </span>
    );
  }
};

export default MenuItem;
