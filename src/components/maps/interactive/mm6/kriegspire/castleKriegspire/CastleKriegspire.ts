import pois from "./castleKriegspire.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/castle-kriegspire.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "CASTLE_KRIEGSPIRE",
  title: "Castle Kriegspire",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(140, 190),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(280, 380)
  ),
  mapImageUrl: mapImage,
}

export default mapData;