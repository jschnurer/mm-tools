import pois from "./templeSnake.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-snake.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "TEMPLE_SNAKE",
  title: "Temple of the Snake",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(70, 120),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(140, 240)
  ),
  mapImageUrl: mapImage,
}

export default mapData;