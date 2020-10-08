import pois from "./lairWolf.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/lair-wolf.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "LAIR_WOLF",
  title: "Lair of the Wolf",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(545, 355),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(1090, 710)
  ),
  mapImageUrl: mapImage,
}

export default mapData;