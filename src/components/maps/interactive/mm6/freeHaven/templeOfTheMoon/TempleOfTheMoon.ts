import { LatLng, LatLngBounds } from "leaflet";
import pois from "./templeOfTheMoon.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-moon.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";

const mapData: IMapData = {
  slug: "TEMPLE_MOON",
  title: "Temple of the Moon",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(125, 150),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(250, 300)
  ),
  mapImageUrl: mapImage,
}

export default mapData;