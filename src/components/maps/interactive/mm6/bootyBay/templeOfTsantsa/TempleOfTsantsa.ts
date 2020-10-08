import pois from "./templeOfTsantsa.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-of-tsantsa.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "TSANTSA",
  title: "Temple of Tsantsa",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(125, 125),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(250, 250)
  ),
  mapImageUrl: mapImage,
}

export default mapData;