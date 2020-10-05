import React from "react";
import Identifier from "./Identifier";
import weaponData from "./game-data/mm3/weapons.json";
import armorData from "./game-data/mm3/armor.json";
import handheldItemData from "./game-data/mm3/handheld-items.json";
import imbuedData from "./game-data/mm3/imbued.json";
import miscData from "./game-data/mm3/misc.json";
import modsData from "./game-data/mm3/mods.json";
import specialItemData from "./game-data/mm3/special-items.json";
import { IWeapon, IArmor, IHandheldItem, IImbue, IMiscItem, IMod, ISpecialItem } from "./ItemTypes";


const MM3Id: React.FC = () =>
  <Identifier
    game="3"
    weapons={weaponData as IWeapon[]}
    armor={armorData as IArmor[]}
    handheldItems={handheldItemData as IHandheldItem[]}
    imbues={imbuedData as IImbue[]}
    miscItems={miscData as IMiscItem[]}
    mods={modsData as IMod[]}
    specialItems={specialItemData as ISpecialItem[]}
    note={<a href="http://shrines.rpgclassics.com/pc/mm3/" target="_blank" rel="noopener noreferrer">Source</a>}
  />;

export default MM3Id;