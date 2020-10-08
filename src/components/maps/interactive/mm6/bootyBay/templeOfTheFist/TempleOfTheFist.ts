import pois from "./templeOfTheFist.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-fist.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "FIST",
  title: "Temple of the Fist",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 2,
    center: new LatLng(70, 55),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(140, 110)
  ),
  mapImageUrl: mapImage,
}

export default mapData;