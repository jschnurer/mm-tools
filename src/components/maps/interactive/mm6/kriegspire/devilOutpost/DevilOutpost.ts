import pois from "./devilOutpost.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/devil-outpost.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "DEVIL",
  title: "Devil Outpost",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(60, 60),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(120, 120)
  ),
  mapImageUrl: mapImage,
}

export default mapData;