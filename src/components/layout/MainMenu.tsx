import React from 'react';
import "./MainMenu.scoped.scss";
import backupIcon from "media/icons/backup.svg";
import magnifyingGlassIcon from "media/icons/magnifying-glass.svg";
import MenuItem from './MenuItem';
import { Routes } from '../../Routing';

const MainMenu: React.FC = () =>
  <div className="main-menu">
    <MenuItem
      label="Random Party"
      icon={backupIcon}
      url={Routes.RandomParty}
    />
    <MenuItem
      label="MM3 Items"
      icon={magnifyingGlassIcon}
      url={Routes.ItemIdentifier}
    />
  </div>;

export default MainMenu;
