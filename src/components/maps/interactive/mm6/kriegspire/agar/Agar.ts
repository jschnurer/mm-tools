import pois from "./agar.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/agar.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "AGAR",
  title: "Agar's Laboratory",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(200, 100),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(400, 200)
  ),
  mapImageUrl: mapImage,
}

export default mapData;