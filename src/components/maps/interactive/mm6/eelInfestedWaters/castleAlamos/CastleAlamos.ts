import pois from "./castleAlamos.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/castle-alamos.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "ALAMOS",
  title: "Castle Alamos",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(250, 275),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(500, 550)
  ),
  mapImageUrl: mapImage,
}

export default mapData;