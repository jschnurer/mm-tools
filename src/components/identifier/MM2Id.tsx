import React from "react";
import Identifier from "./Identifier";
import weaponData from "./game-data/mm2/weapons.json";
import armorData from "./game-data/mm2/armor.json";
import miscData from "./game-data/mm2/misc.json";
import { IWeapon, IArmor, IOtherItem } from "./ItemTypes";

const MM2Id: React.FC = () =>
  <Identifier
    game="2"
    weapons={weaponData as IWeapon[]}
    armor={armorData as IArmor[]}
    handheldItems={[]}
    imbues={[]}
    miscItems={[]}
    otherItems={miscData as IOtherItem[]}
    mods={[]}
    specialItems={[]}
    searchExact={true}
    note={(
      <p><a href="http://shrines.rpgclassics.com/pc/mm2/" target="_blank">Source</a></p>
    )}
  />;

export default MM2Id;