import pois from "./monolith.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/monolith.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "MONOLITH",
  title: "Monolith",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(132, 132),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(265, 265)
  ),
  mapImageUrl: mapImage,
}

export default mapData;