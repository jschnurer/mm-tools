import React from 'react';
import "./MainMenu.scoped.scss";
import backupIcon from "media/icons/backup.svg";
import magnifyingGlassIcon from "media/icons/magnifying-glass.svg";
import hamburgerMenuIcon from "media/icons/hamburger-menu.svg";
import MenuItem from './MenuItem';
import { Routes } from '../../Routing';

const MainMenu: React.FC = () =>
  <div className="main-menu">
    <MenuItem
      label="Menu"
      icon={hamburgerMenuIcon}
      url=""
    />
    <MenuItem
      label="Random Party"
      icon={backupIcon}
      url={Routes.RandomParty}
    />
    <MenuItem
      label="M&amp;M 3 Items"
      icon={magnifyingGlassIcon}
      url={Routes.MM3ItemIdentifier}
    />
  </div>;

export default MainMenu;
