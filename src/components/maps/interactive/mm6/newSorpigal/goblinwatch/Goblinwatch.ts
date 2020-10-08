import pois from "./goblinwatch.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/goblinwatch.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "GOBLINWATCH",
  title: "Goblinwatch",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(150, 480),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(300, 960)
  ),
  mapImageUrl: mapImage,
}

export default mapData;