import pois from "./dragoonsCaverns.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/dragoons-caverns.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "DRAGOONS_CAVERNS",
  title: "Dragoons' Caverns",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(190, 165),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(380, 330)
  ),
  mapImageUrl: mapImage,
}

export default mapData;