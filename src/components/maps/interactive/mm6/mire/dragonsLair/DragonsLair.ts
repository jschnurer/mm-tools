import { LatLng, LatLngBounds } from "leaflet";
import pois from "./dragonsLair.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/dragons-lair.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";

const mapData: IMapData = {
  slug: "MIRE_DRAGON",
  title: "Dragon's Lair",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(65, 45),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(130, 90)
  ),
  mapImageUrl: mapImage,
}

export default mapData;