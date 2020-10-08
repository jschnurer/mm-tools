import pois from "./dragonRiders.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/dragon-riders.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "DRAGON_RIDERS",
  title: "Caves of the Dragon Riders",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(175, 175),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(350, 350)
  ),
  mapImageUrl: mapImage,
}

export default mapData;