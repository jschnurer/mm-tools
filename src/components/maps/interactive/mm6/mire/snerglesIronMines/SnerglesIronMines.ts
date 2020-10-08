import pois from "./snerglesIronMines.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/snergles-iron-mines.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SNERGLE_IRON",
  title: "Snergle's Iron Mines",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(150, 240),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(300, 480)
  ),
  mapImageUrl: mapImage,
}

export default mapData;