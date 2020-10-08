import pois from "./fireLord.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/fire-lord.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "FIRE_LORD",
  title: "Hall of the Fire Lord",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(175, 155),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(350, 310)
  ),
  mapImageUrl: mapImage,
}

export default mapData;