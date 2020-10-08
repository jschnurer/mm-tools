import pois from "./abandonedTemple.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/abandoned-temple.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "ABAN_TEMPLE",
  title: "Abandoned Temple",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(375, 610),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(750, 1220)
  ),
  mapImageUrl: mapImage,
}

export default mapData;