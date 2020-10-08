import pois from "./supremeBaa.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/supreme-baa.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SUPREME_BAA",
  title: "Supreme Temple of Baa",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(150, 200),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(300, 400)
  ),
  mapImageUrl: mapImage,
}

export default mapData;