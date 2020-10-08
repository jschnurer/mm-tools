import pois from "./sewers.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/sewers.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SEWERS",
  title: "Free Haven Sewers",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(285, 500),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(570, 1000)
  ),
  mapImageUrl: mapImage,
}

export default mapData;