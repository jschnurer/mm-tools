import templeOfTheMoon from "./freeHaven/templeOfTheMoon/TempleOfTheMoon";
import tombEthric from "./freeHaven/tombEthric/TombEthric";
import dragoonsKeep from "./freeHaven/dragoonsKeep/DragoonsKeep";
import templeOfTheSun from "./bootyBay/templeOfTheSun/TempleOfTheSun";
import templeOfTheFist from "./bootyBay/templeOfTheFist/TempleOfTheFist";
import dragonsLair from "./mire/dragonsLair/DragonsLair";
import enroth from "./MM6WorldMap";
import goblinwatch from "./newSorpigal/goblinwatch/Goblinwatch";
import abandonedTemple from "./newSorpigal/abandonedTemple/AbandonedTemple";
import gharik from "./newSorpigal/ghariksForge/GhariksForge";
import templeBaa from "./castleIronfist/templeBaa/TempleBaa";
import shadowGuildHideout from "./castleIronfist/shadowGuildHideout/ShadowGuildHideout";
import corlagonsEstate from "./castleIronfist/corlagonsEstate/CorlagonsEstate";
import snerglesCaverns from "./castleIronfist/snerglesCaverns/SnerglesCaverns";
import { IMapData } from "../MapTypes";

const MapDictionary: IMapData[] = [
  enroth,
  templeOfTheMoon,
  templeOfTheSun,
  templeOfTheFist,
  goblinwatch,
  abandonedTemple,
  tombEthric,
  dragoonsKeep,
  dragonsLair,
  gharik,
  templeBaa,
  shadowGuildHideout,
  corlagonsEstate,
  snerglesCaverns,
];

export default MapDictionary;