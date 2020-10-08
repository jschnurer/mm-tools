import { LatLng, LatLngBounds } from "leaflet";
import pois from "./worldMap.json";
import { formatPOI } from "../InteractiveMap";
import mapImage from "media/maps/mm6/mm6-world.png";
import { IMapData } from "../MapTypes";

const mapData: IMapData = {
  slug: "ENROTH",
  title: "Enroth",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: -2,
    center: new LatLng(1192, 1987),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(2385, 3975),
  ),
  mapImageUrl: mapImage,
}

export default mapData;