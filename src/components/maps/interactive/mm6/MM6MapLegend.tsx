import Modal from "components/layout/Modal";
import React, { useState } from "react";
import icons from "../icons";
import "./MM6MapLegend.scoped.scss";
import { IMapLegendProps, ILegend } from "../MapTypes";

const iconLegendMapping: {
  [index: string]: string[]
} = {
  "shop": ["Shop", "Shops/Services"],
  "inn": ["Inn", "Shops/Services"],
  "bank": ["Bank", "Shops/Services"],
  "training": ["Training Hall", "Shops/Services"],
  "docks": ["Docks", "Shops/Services"],
  "coach": ["Coach Service", "Shops/Services"],
  "townHall": ["Town Hall", "Shops/Services"],
  "temple": ["Temple", "Shops/Services"],
  "cult": ["Temple of Baa", "Shops/Services"],

  "axe": ["Axe", "Weapon Skill Trainers"],
  "blaster": ["Blaster", "Weapon Skill Trainers"],
  "bow": ["Bow", "Weapon Skill Trainers"],
  "dagger": ["Dagger", "Weapon Skill Trainers"],
  "mace": ["Mace", "Weapon Skill Trainers"],
  "spear": ["Spear", "Weapon Skill Trainers"],
  "staff": ["Staff", "Weapon Skill Trainers"],
  "sword": ["Sword", "Weapon Skill Trainers"],

  "leather": ["Leather Armor", "Armor Skill Trainers"],
  "chain": ["Chain Armor", "Armor Skill Trainers"],
  "plate": ["Plate Armor", "Armor Skill Trainers"],
  "shield": ["Shield", "Armor Skill Trainers"],

  "air": ["Air Magic", "Magic Skill Trainers"],
  "earth": ["Earth Magic", "Magic Skill Trainers"],
  "fire": ["Fire Magic", "Magic Skill Trainers"],
  "water": ["Water Magic", "Magic Skill Trainers"],
  "body": ["Body Magic", "Magic Skill Trainers"],
  "mind": ["Mind Magic", "Magic Skill Trainers"],
  "spirit": ["Spirit Magic", "Magic Skill Trainers"],
  "dark": ["Dark Magic", "Magic Skill Trainers"],
  "light": ["Light Magic", "Magic Skill Trainers"],

  "bodyBuilding": ["Bodybuilding", "Misc. Skill Trainers"],
  "diplomacy": ["Diplomacy", "Misc. Skill Trainers"],
  "disarm": ["Disarm Traps", "Misc. Skill Trainers"],
  "identify": ["Identify Item", "Misc. Skill Trainers"],
  "learning": ["Learning", "Misc. Skill Trainers"],
  "meditation": ["Meditation", "Misc. Skill Trainers"],
  "merchant": ["Merchant", "Misc. Skill Trainers"],
  "perception": ["Perception", "Misc. Skill Trainers"],
  "repair": ["Repair Item", "Misc. Skill Trainers"],

  "quest": ["Quest", "Other"],
  "obelisk": ["Obelisk", "Other"],
  "dungeon": ["Dungeon Entrance", "Other"],
  "fountain": ["Fountain", "Other"],
  "info": ["Point of Interest", "Other"],
  "house": ["Useful NPC", "Other"],
}

const MM6MapLegend: React.FC<IMapLegendProps> = ({
  currentLegend,
  onApply,
  onClose,
}) => {
  const [legend, setLegend] = useState<ILegend>({
    ...currentLegend,
  });

  const groups = Object.keys(iconLegendMapping)
    .map(x => iconLegendMapping[x][1])
    .filter((item, ix, arr) => arr.indexOf(item) === ix);

  const onCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLegend = {
      ...legend,
    };

    newLegend[event.target.name] = event.target.checked;

    setLegend(newLegend);
  }

  const onCheckAll = () => {
    const newLegend: ILegend = {};

    Object
      .keys(icons)
      .forEach(key =>
        newLegend[key] = true);

    setLegend(newLegend);
  }

  const onCheckNone = () => {
    const newLegend: ILegend = {};

    Object
      .keys(icons)
      .forEach(key =>
        newLegend[key] = false);

    setLegend(newLegend);
  }

  return (
    <Modal
      header="Legend"
      onClose={onClose}
      footer={(
        <>
          <button
            className="secondary-button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="secondary-button"
            onClick={onCheckNone}
          >
            Check None
          </button>
          <button
            className="secondary-button"
            onClick={onCheckAll}
          >
            Check All
          </button>
          <button
            className="primary-button"
            onClick={() => onApply(legend)}
          >
            Apply
          </button>
        </>
      )}
    >
      {groups.map(g => (
        <div
          key={g}
        >
          <h4>{g}</h4>
          <ul>
            {Object.keys(iconLegendMapping)
              .filter(key => iconLegendMapping[key][1] === g)
              .map(key => (
                <li
                  key={key}
                >
                  <label>
                    <input
                      type="checkbox"
                      name={key}
                      checked={legend[key] || false}
                      onChange={onCheckChange}
                    />
                    <img
                      src={icons[key].options.iconUrl}
                      alt=""
                    />
                    {iconLegendMapping[key][0]}
                  </label>
                </li>
              ))
            }
          </ul>
        </div>
      ))}
    </Modal>
  );
};

export default MM6MapLegend;