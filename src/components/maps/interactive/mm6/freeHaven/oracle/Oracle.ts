import pois from "./oracle.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/oracle.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "ORACLE",
  title: "Oracle",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(185, 185),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(370, 370)
  ),
  mapImageUrl: mapImage,
}

export default mapData;