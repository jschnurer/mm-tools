import pois from "./superiorBaa.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/superior-baa.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SUPERIOR_BAA",
  title: "Superior Temple of Baa",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(265, 275),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(530, 550)
  ),
  mapImageUrl: mapImage,
}

export default mapData;