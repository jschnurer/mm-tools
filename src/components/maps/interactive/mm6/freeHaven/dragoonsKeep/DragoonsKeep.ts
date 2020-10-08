import { LatLng, LatLngBounds } from "leaflet";
import pois from "./dragoonsKeep.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/dragoons-keep.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";

const mapData: IMapData = {
  slug: "DRAGOON",
  title: "Dragoon's Keep",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(200, 145),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(400, 290)
  ),
  mapImageUrl: mapImage,
}

export default mapData;