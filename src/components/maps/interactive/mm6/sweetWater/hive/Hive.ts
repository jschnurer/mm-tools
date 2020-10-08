import pois from "./hive.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/hive.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "HIVE",
  title: "The Hive",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(315, 220),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(630, 440)
  ),
  mapImageUrl: mapImage,
}

export default mapData;