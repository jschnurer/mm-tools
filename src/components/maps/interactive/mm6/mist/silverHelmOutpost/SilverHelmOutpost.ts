import pois from "./silverHelmOutpost.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/silver-helm-outpost.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SH_OUTPOST",
  title: "Silver Helm Outpost",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(120, 100),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(240, 200)
  ),
  mapImageUrl: mapImage,
}

export default mapData;