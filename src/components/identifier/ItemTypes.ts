export interface IWeapon {
  name: string;
  classes: string;
  hands: string;
  damage: string;
}

export interface IArmor {
  name: string;
  classes: string;
  acBonus: number;
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

export type IItem =
  IWeapon
  | IArmor
  | IHandheldItem
  | IMiscItem
  | ISpecialItem;

export enum ItemTypes {
  Weapon,
  Armor,
  Handheld,
  Misc,
  Special,
}