import pois from "./castleDarkmoor.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/castle-darkmoor.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "DARKMOOR",
  title: "Castle Darkmoor",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(365, 525),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(730, 1050)
  ),
  mapImageUrl: mapImage,
}

export default mapData;