import React from 'react';
import "./MenuItem.scoped.scss";
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";

interface IMenuItemProps {
  label: string,
  icon: string,
  url: string,
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, icon, url }) => {
  let match = useRouteMatch(url);

  return (
    <Link to={url} className={`menu-item ${match ? "active" : ""}`}>
      <img src={icon} alt={label} /> {label}
    </Link>
  );
};

export default MenuItem;
