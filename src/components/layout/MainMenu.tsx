import React, { useState } from 'react';
import "./MainMenu.scoped.scss";
import backupIcon from "media/icons/backup.svg";
import magnifyingGlassIcon from "media/icons/magnifying-glass.svg";
import hamburgerMenuIcon from "media/icons/hamburger-menu.svg";
import teacherIcon from "media/icons/teacher.svg";
import mapIcon from "media/icons/treasure-map.svg";
import MenuItem from './MenuItem';
import { Routes } from '../../Routing';

const MainMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="main-menu">
      <MenuItem
        label="Menu"
        icon={hamburgerMenuIcon}
        url=""
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <MenuItem
        label="Random Party"
        icon={backupIcon}
        url={Routes.RandomParty}
        isCollapsed={isCollapsed}
      />
      <MenuItem
        label="Skill Trainers"
        icon={teacherIcon}
        url={Routes.SkillTrainers}
        isCollapsed={isCollapsed}
      />
      <MenuItem
        label="Maps"
        icon={mapIcon}
        url={Routes.Maps}
        isCollapsed={isCollapsed}
      />
      <MenuItem
        label="M&amp;M 3 Items"
        icon={magnifyingGlassIcon}
        url={Routes.MM3ItemIdentifier}
        isCollapsed={isCollapsed}
      />
    </div>
  );
}

export default MainMenu;
