import pois from "./templeBaa.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/temple-baa.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "TEMPLE_BAA",
  title: "Temple of Baa",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(475, 360),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(950, 720)
  ),
  mapImageUrl: mapImage,
}

export default mapData;