export interface IWeapon {
  name: string;
  classes: string;
  hands: string;
  damage: string;
  bonus?: string;
  useAbility?: string;
}

export interface IArmor {
  name: string;
  classes: string;
  acBonus: number;
  bonus?: string;
  useAbility?: string;
}

export interface IHandheldItem {
  name: string;
  classes: string;
  acBonus: number;
}

export interface IImbue {
  suffix: string;
  spell: string;
}

export interface IMiscItem {
  name: string;
  type: string;
  acBonus: number;
}

export interface IOtherItem {
  name: string;
  classes: string;
  bonus: string;
  useAbility: string;
  acBonus: undefined;
}

export interface IMod {
  property: string;
  toHit: string | number;
  damage: string | number;
  ac: string | number;
  other: string;
}

export interface ISpecialItem {
  name: string;
  purpose: string;
  location: string;
}

export interface IMM1Item {
  name: string;
  classes: string;
  special: string;
  amt: number;
  magic: string;
  cost: number;
  dmg: number;
  acDmg: number;
}

export type IItem =
  IWeapon
  | IArmor
  | IHandheldItem
  | IMiscItem
  | ISpecialItem
  | IOtherItem
  | IMM1Item;

export enum ItemTypes {
  Weapon,
  Armor,
  Handheld,
  Misc,
  Special,
  Other,
  MM1Item,
}