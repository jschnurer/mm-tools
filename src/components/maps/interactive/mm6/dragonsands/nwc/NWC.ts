import pois from "./nwc.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/nwc.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "NWC",
  title: "New World Computing",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(140, 100),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(280, 200)
  ),
  mapImageUrl: mapImage,
}

export default mapData;