import backupIcon from "media/icons/backup.svg";
import hamburgerMenuIcon from "media/icons/hamburger-menu.svg";
import helpIcon from "media/icons/help.svg";
import magnifyingGlassIcon from "media/icons/magnifying-glass.svg";
import potionIcon from "media/icons/potion-ball.svg";
import teacherIcon from "media/icons/teacher.svg";
import mapIcon from "media/icons/treasure-map.svg";
import React, { useState } from 'react';
import { Routes } from '../../Routing';
import styles from "./MainMenu.module.scss";
import MenuItem from './MenuItem';

const MainMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={styles["main-menu"]}>
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
        label="Item Identifier"
        icon={magnifyingGlassIcon}
        url={Routes.ItemIdentifier}
        isCollapsed={isCollapsed}
        matchExact={false}
      />
      <MenuItem
        label="Alchemy"
        icon={potionIcon}
        url={Routes.Alchemy}
        isCollapsed={isCollapsed}
      />
      <MenuItem
        label="About"
        icon={helpIcon}
        url={Routes.Root}
        isCollapsed={isCollapsed}
      />
    </div>
  );
}

export default MainMenu;
