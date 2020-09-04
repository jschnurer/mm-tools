import React, { useState, useRef, useEffect } from "react";
import PageTitle from "components/layout/PageTitle";
import "./MM3Items.scoped.scss";
import {
  weapons,
  armor,
  handheldItems,
  miscItems,
  mods,
  specialItems,
  IMM3SpecialItem,
  IMM3Weapon,
  IMM3Armor,
  IMM3HandheldItem,
  IMM3MiscItem,
  IMM3Item,
  MM3ItemTypes,
  IMM3Mod,
  IMM3Imbue,
  imbues,
} from "./MM3Data";
import PageLayout from "components/layout/PageLayout";

const MM3Items: React.FC = () => {
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

    if (type === MM3ItemTypes.Special) {
      setSpecialItem(item as IMM3SpecialItem);
      return;
    } else {
      term = term.replace(item.name.toUpperCase(), "");
    }

    const mods = findAllMods(term);
    const imbues = findAllImbues(term);

    if (type == MM3ItemTypes.Weapon) {
      setWeapon(item as IMM3Weapon, mods, imbues);
    } else if (type == MM3ItemTypes.Armor) {
      setOther(item as IMM3Armor, mods, imbues);
    } else if (type == MM3ItemTypes.Handheld) {
      setOther(item as IMM3HandheldItem, mods, imbues);
    } else if (type == MM3ItemTypes.Misc) {
      setOther(item as IMM3MiscItem, mods, imbues);
    }

    searchBoxRef.current?.select();
  }

  const setSpecialItem = (item: IMM3SpecialItem) => {
    appendItem(`${item.name}
    Purpose: ${item.purpose}
    Location: ${item.location}`);
  }

  const findItem = (search: string): [IMM3Item, MM3ItemTypes] | undefined => {
    let special = specialItems.find(x => x.name.toUpperCase() === search);
    if (special) {
      return [special, MM3ItemTypes.Special];
    }
    let weapon = weapons.find(x => search.indexOf(x.name.toUpperCase()) > -1);
    if (weapon) {
      return [weapon, MM3ItemTypes.Weapon];
    }
    let armorItem = armor.find(x => search.indexOf(x.name.toUpperCase()) > -1);
    if (armorItem) {
      return [armorItem, MM3ItemTypes.Armor];
    }
    let handheldItem = handheldItems.find(x => search.indexOf(x.name.toUpperCase()) > -1);
    if (handheldItem) {
      return [handheldItem, MM3ItemTypes.Handheld];
    }
    let miscItem = miscItems.find(x => search.indexOf(x.name.toUpperCase()) > -1);
    if (miscItem) {
      return [miscItem, MM3ItemTypes.Misc];
    }
  }

  const findAllMods = (search: string): IMM3Mod[] => {
    return mods.filter(x => search.indexOf(x.property.toUpperCase()) > -1);
  }

  const findAllImbues = (search: string): IMM3Imbue[] => {
    return imbues.filter(x => search.indexOf(x.suffix.toUpperCase()) > -1);
  }

  const appendItem = (item: string) => {
    setItems([
      item,
      ...items,
    ]);
  }

  const setWeapon = (weapon: IMM3Weapon, mods: IMM3Mod[], imbues: IMM3Imbue[]) => {
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

    appendItem(`${searchTerm} (${weapon.damage}${dmgBonus})${toHitString} {${weapon.classes}}`
      + (allOthers
        ? `\n${allOthers}`
        : "")
      + (spells
        ? `\n${spells}`
        : ""));
  }

  const setOther = (item: IMM3Armor | IMM3HandheldItem | IMM3MiscItem, mods: IMM3Mod[], imbues: IMM3Imbue[]) => {
    let totalAC = item.acBonus;
    mods
      .filter(mod => typeof mod.ac === "number")
      .forEach(mod => totalAC += mod.ac as number);

    let allOthers = getOthersString(mods);
    let spells = getCastsString(imbues);
    let classesString = (item as any).classes
      ? ` {${(item as any).classes}}`
      : "";

    appendItem(`${searchTerm} (AC: ${totalAC})${classesString}`
      + (allOthers
        ? `\n${allOthers}`
        : "")
      + (spells
        ? `\n${spells}`
        : ""));
  }

  const getOthersString = (mods: IMM3Mod[]) => {
    return mods
      .filter(mod => !!mod.other
        && mod.other !== "none")
      .map(mod => mod.other)
      .join(', ');
  }

  const getCastsString = (imbues: IMM3Imbue[]) => {
    let spells = imbues
      .map(x => x.spell)
      .join(', ');

    if (!!spells) {
      spells = `Casts: ${spells}`;
    }

    return spells;
  }

  return (
    <PageLayout
      header={(
        <>
          <PageTitle title="M&amp;M 3 Item Identifier" />
          <form
            onSubmit={(e) => doSearch(e)}
          >
            <div>
              <input
                type="text"
                placeholder="Type item name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchBoxRef}
              />
              <button
                className="primary-button"
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
            </div>
          </form>
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
    </PageLayout>
  );
}

export default MM3Items;