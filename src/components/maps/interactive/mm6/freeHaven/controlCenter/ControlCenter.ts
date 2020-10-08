import pois from "./controlCenter.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/control-center.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "CONTROL_CENTER",
  title: "Control Center",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(175, 290),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(350, 580)
  ),
  mapImageUrl: mapImage,
}

export default mapData;