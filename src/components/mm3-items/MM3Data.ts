import weaponData from "./weapons.json";
import armorData from "./armor.json";
import handheldItemData from "./handheld-items.json";
import imbuedData from "./imbued.json";
import miscData from "./misc.json";
import modsData from "./mods.json";
import specialItemData from "./special-items.json";

export interface IMM3Weapon {
  name: string;
  classes: string;
  hands: string;
  damage: string;
}

export interface IMM3Armor {
  name: string;
  classes: string;
  acBonus: number;
}

export interface IMM3HandheldItem {
  name: string;
  classes: string;
  acBonus: number;
}

export interface IMM3Imbue {
  suffix: string;
  spell: string;
}

export interface IMM3MiscItem {
  name: string;
  type: string;
  acBonus: number;
}

export interface IMM3Mod {
  property: string;
  toHit: string | number;
  damage: string | number;
  ac: string | number;
  other: string;
}

export interface IMM3SpecialItem {
  name: string;
  purpose: string;
  location: string;
}

export type IMM3Item =
  IMM3Weapon
  | IMM3Armor
  | IMM3HandheldItem
  | IMM3MiscItem
  | IMM3SpecialItem;

export enum MM3ItemTypes {
  Weapon,
  Armor,
  Handheld,
  Misc,
  Special,
}

const weapons = weaponData as IMM3Weapon[];
const armor = armorData as IMM3Armor[];
const handheldItems = handheldItemData as IMM3HandheldItem[];
const imbues = imbuedData as IMM3Imbue[];
const miscItems = miscData as IMM3MiscItem[];
const mods = modsData as IMM3Mod[];
const specialItems = specialItemData as IMM3SpecialItem[];

export {
  weapons,
  armor,
  handheldItems,
  imbues,
  miscItems,
  mods,
  specialItems,
};