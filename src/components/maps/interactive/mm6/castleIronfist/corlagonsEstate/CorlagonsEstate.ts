import pois from "./corlagonsEstate.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/corlagon.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "CORLAGON",
  title: "Corlagon's Estate",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(235, 175),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(470, 350)
  ),
  mapImageUrl: mapImage,
}

export default mapData;