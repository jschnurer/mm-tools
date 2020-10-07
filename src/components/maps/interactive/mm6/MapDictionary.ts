import templeOfTheMoon from "./freeHaven/templeOfTheMoon/TempleOfTheMoon";
import templeOfTheSun from "./bootyBay/templeOfTheSun/TempleOfTheSun";
import enroth from "./MM6WorldMap";
import { IMapData } from "../MapTypes";

const MapDictionary: IMapData[] = [
  enroth,
  templeOfTheMoon,
  templeOfTheSun,
];

export default MapDictionary;