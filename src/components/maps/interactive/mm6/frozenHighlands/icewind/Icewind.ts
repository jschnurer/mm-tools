import pois from "./icewind.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/icewind.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "ICEWIND",
  title: "Icewind Keep",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(170, 130),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(340, 260)
  ),
  mapImageUrl: mapImage,
}

export default mapData;