import pois from "./tombVARN.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/tomb-varn.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "TOMB_OF_VARN",
  title: "Tomb of VARN",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(475, 355),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(950, 710)
  ),
  mapImageUrl: mapImage,
}

export default mapData;