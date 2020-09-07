import React, { useState, useRef, useEffect } from "react";
import PageTitle from "components/layout/PageTitle";
import "./Identifier.scoped.scss";
import {
  ISpecialItem,
  IWeapon,
  IArmor,
  IHandheldItem,
  IMiscItem,
  IItem,
  ItemTypes,
  IMod,
  IImbue,
  IOtherItem,
  IMM1Item,
} from "./ItemTypes";
import FlowLayout from "components/layout/FlowLayout";

interface IIdentifierProps {
  weapons: IWeapon[],
  armor: IArmor[],
  handheldItems: IHandheldItem[],
  miscItems: IMiscItem[],
  mods: IMod[],
  specialItems: ISpecialItem[],
  imbues: IImbue[],
  otherItems?: IOtherItem[],
  mm1Items?: IMM1Item[],
  game: string,
  searchExact?: boolean,
  note?: JSX.Element,
}

const Identifier: React.FC<IIdentifierProps> = ({
  weapons,
  armor,
  handheldItems,
  miscItems,
  mods,
  specialItems,
  otherItems,
  imbues,
  mm1Items,
  game,
  searchExact,
  note,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const searchBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchBoxRef.current?.focus();
  }, [searchBoxRef]);

  const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    let term = searchTerm.toUpperCase();

    const result = findItem(term);

    if (!result) {
      searchBoxRef.current?.select();
      return;
    }

    const [item, type] = result;

    if (type === ItemTypes.Special) {
      setSpecialItem(item as ISpecialItem);
      return;
    } else {
      term = term.replace(item.name.toUpperCase(), "");
    }

    const mods = findAllMods(term);
    const imbues = findAllImbues(term);

    if (type === ItemTypes.Weapon) {
      setWeapon(item as IWeapon, mods, imbues);
    } else if (type === ItemTypes.Armor) {
      setOther(item as IArmor, mods, imbues);
    } else if (type === ItemTypes.Handheld) {
      setOther(item as IHandheldItem, mods, imbues);
    } else if (type === ItemTypes.Misc) {
      setOther(item as IMiscItem, mods, imbues);
    } else if (type === ItemTypes.Other) {
      setOther(item as IOtherItem, mods, imbues);
    } else if (type === ItemTypes.MM1Item) {
      setMM1Item(item as IMM1Item);
    }

    searchBoxRef.current?.select();
  }

  const setSpecialItem = (item: ISpecialItem) => {
    appendItem(`${item.name}
    Purpose: ${item.purpose}
    Location: ${item.location}`);
  }

  const findItem = (search: string): [IItem, ItemTypes] | undefined => {
    let special = specialItems.find(x => x.name.toUpperCase() === search);
    if (special) {
      return [special, ItemTypes.Special];
    }
    let weapon = weapons.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (weapon) {
      return [weapon, ItemTypes.Weapon];
    }
    let armorItem = armor.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (armorItem) {
      return [armorItem, ItemTypes.Armor];
    }
    let handheldItem = handheldItems.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (handheldItem) {
      return [handheldItem, ItemTypes.Handheld];
    }
    let miscItem = miscItems.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (miscItem) {
      return [miscItem, ItemTypes.Misc];
    }
    let otherItem = otherItems?.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (otherItem) {
      return [otherItem, ItemTypes.Other];
    }
    let mm1Item = mm1Items?.find(x => searchExact
      ? x.name.toUpperCase() === search
      : search.indexOf(x.name.toUpperCase()) > -1);
    if (mm1Item) {
      return [mm1Item, ItemTypes.MM1Item];
    }
  }

  const findAllMods = (search: string): IMod[] => {
    return mods.filter(x => search.indexOf(x.property.toUpperCase()) > -1);
  }

  const findAllImbues = (search: string): IImbue[] => {
    return imbues.filter(x => search.indexOf(x.suffix.toUpperCase()) > -1);
  }

  const appendItem = (item: string) => {
    setItems([
      item,
      ...items,
    ]);
  }

  const setWeapon = (weapon: IWeapon, mods: IMod[], imbues: IImbue[]) => {
    let dmgBonus = "";
    mods.forEach(mod => {
      if (!mod.damage
        || mod.damage === "none") {
        return;
      }

      if (typeof mod.damage === "number"
        && mod.damage as number > 0) {
        dmgBonus += ` +${mod.damage}`;
      } else {
        dmgBonus += ` ${mod.damage}`;
      }
    });

    let toHit = 0;
    mods.forEach(mod => {
      if (mod.toHit !== "none") {
        toHit += mod.toHit as number;
      }
    });

    let toHitString = "";

    if (toHit < 0) {
      toHitString = toHit.toString();
    } else if (toHit > 0) {
      toHitString = `+${toHit}`;
    }

    if (toHitString) {
      toHitString = ` [${toHitString} to hit]`;
    }

    let allOthers = getOthersString(mods);
    let spells = getCastsString(imbues);

    if (weapon.bonus
      && (weapon.bonus !== "None")) {
      allOthers = allOthers
        ? ", " + weapon.bonus
        : weapon.bonus || "";
    }

    if (weapon.useAbility
      && weapon.useAbility !== "None") {
      spells = spells
        ? ", " + weapon.bonus
        : "Casts: " + weapon.bonus;
    }

    let dmg = weapon.damage;

    if (parseInt(dmg, 10) + "" === dmg) {
      dmg += " max damage";
    }

    appendItem(`${searchTerm} (${dmg}${dmgBonus})${toHitString} {${weapon.classes}}`
      + (allOthers
        ? `\n${allOthers}`
        : "")
      + (spells
        ? `\n${spells}`
        : ""));
  }

  const setOther = (item: IArmor | IHandheldItem | IMiscItem | IOtherItem, mods: IMod[], imbues: IImbue[]) => {
    let totalAC = item.acBonus;
    if (totalAC !== undefined) {
      mods
        .filter(mod => typeof mod.ac === "number")
        .forEach(mod => {
          if (totalAC !== undefined) {
            totalAC += mod.ac as number;
          }
        });
    }

    let allOthers = getOthersString(mods);
    let spells = getCastsString(imbues);
    let classesString = (item as any).classes
      ? ` {${(item as any).classes}}`
      : "";

    if ((item as IArmor).bonus
      && (item as IArmor).bonus !== "None"
      && (item as IArmor).bonus !== "No Equip") {
      allOthers = allOthers
        ? ", " + (item as IArmor).bonus
        : (item as IArmor).bonus || "";
    }

    if ((item as IArmor).useAbility
      && (item as IArmor).useAbility !== "N/A"
      && (item as IArmor).useAbility !== "None") {
      spells = spells
        ? ", " + (item as IArmor).useAbility
        : "Casts: " + (item as IArmor).useAbility;
    }

    let acString = totalAC !== undefined
      ? ` (AC: ${totalAC})`
      : '';

    appendItem(`${searchTerm}${acString}${classesString}`
      + (allOthers
        ? `\n${allOthers}`
        : "")
      + (spells
        ? `\n${spells}`
        : ""));
  }

  const setMM1Item = (item: IMM1Item) => {
    appendItem(`${item.name} {${item.classes}}
      SPECIAL: ${item.special}
      AMT: ${item.amt}
      MAGIC: ${item.magic}
      COST: ${item.cost}
      DMG: ${item.dmg}
      AC/DMG: ${item.acDmg}
    `);
  }

  const getOthersString = (mods: IMod[]) => {
    return mods
      .filter(mod => !!mod.other
        && mod.other !== "none")
      .map(mod => mod.other)
      .join(', ');
  }

  const getCastsString = (imbues: IImbue[]) => {
    let spells = imbues
      .map(x => x.spell)
      .join(', ');

    if (!!spells) {
      spells = `Casts: ${spells}`;
    }

    return spells;
  }

  return (
    <FlowLayout
      header={(
        <>
          <PageTitle title={`M&M ${game} Item Identifier`} />
          <form
            onSubmit={(e) => doSearch(e)}
          >
            <div>
              <input
                type="text"
                placeholder="Search by full item name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchBoxRef}
              />
              <button
                type="submit"
              >
                Id
              </button>
            </div>
            <div>
              <span>K = Knight</span>
              <span>P = Paladin</span>
              <span>A = Archer</span>
              <span>C = Cleric</span>
              <span>S = Sorcerer</span>
              <span>T = Robber</span>
              <span>N = Ninja</span>
              <span>B = Barbarian</span>
              <span>D = Druid</span>
              <span>R = Ranger</span>
              <span>E = Evil</span>
              <span>G = Good</span>
              <span>EG = +Neutral</span>
            </div>
          </form>
          {note}
        </>
      )}
    >
      {items &&
        items.map((item, ix) =>
          <p
            key={ix}
            className="item-description"
          >
            {item.split('\n').map((line, ix) =>
              <span key={ix}>{line}</span>
            )}
          </p>
        )
      }
    </FlowLayout>
  );
}

export default Identifier;