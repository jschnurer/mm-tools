import React from "react";
import Identifier from "./Identifier";
import weaponData from "./game-data/mm4-5/weapons.json";
import armorData from "./game-data/mm4-5/armor.json";
import miscData from "./game-data/mm4-5/misc.json";
import modsData from "./game-data/mm4-5/mods.json";
import { IWeapon, IArmor, IMiscItem, IMod } from "./ItemTypes";

const MMXeenId: React.FC = () =>
  <Identifier
    game="4/5"
    weapons={weaponData as IWeapon[]}
    armor={armorData as IArmor[]}
    handheldItems={[]}
    imbues={[]}
    miscItems={miscData as IMiscItem[]}
    mods={modsData as IMod[]}
    specialItems={[]}
    note={(
      <p><a href="http://shrines.rpgclassics.com/pc/mm4_5/" target="_blank">Source</a></p>
    )}
  />;

export default MMXeenId;