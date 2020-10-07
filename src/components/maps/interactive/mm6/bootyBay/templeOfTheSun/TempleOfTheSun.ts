import pois from "./templeOfTheSun.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-sun.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "TEMPLE_SUN",
  title: "Temple of the Sun",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 2,
    center: new LatLng(50, 90),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(100, 180)
  ),
  mapImageUrl: mapImage,
}

export default mapData;