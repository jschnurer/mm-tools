import pois from "./warlordsFortress.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/warlords-fortress.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "WARLORD",
  title: "Warlord's Fortress",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(100, 130),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(200, 260)
  ),
  mapImageUrl: mapImage,
}

export default mapData;