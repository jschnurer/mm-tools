import React from "react";
import Identifier from "./Identifier";
import items from "./game-data/mm1/items.json";
import { IMM1Item } from "./ItemTypes";

const MM1Id: React.FC = () =>
  <Identifier
    game="1"
    weapons={[]}
    armor={[]}
    handheldItems={[]}
    imbues={[]}
    miscItems={[]}
    otherItems={[]}
    mods={[]}
    specialItems={[]}
    mm1Items={items as IMM1Item[]}
    searchExact={true}
    note={(
      <p>
        SPECIAL = EQUIP/NONE/???, can or can't be equipped, otherwise equip gives +protection or +attribute;
        AMT = how much attr is increased (e.g. COLD/50 is +%) cold resist);
        MAGIC = Y/N determines if it can cast magic, the number is the number of charges;
        COST = gold value;
        DMG = base weapon damage (e.g. club is 1-3 damage);
        AC/DMG = AC if armor or extra damage. <a href="http://alexandria.rpgclassics.com/PC/mightandmagic/mightandmagic_3.txt" target="_blank">Source</a>
      </p>
    )}
  />;

export default MM1Id;