import pois from "./ghariksForge.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/gharik.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "GHARIK",
  title: "Gharik's Forge",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(165, 130),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(330, 260)
  ),
  mapImageUrl: mapImage,
}

export default mapData;