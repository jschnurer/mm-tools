import pois from "./snerglesCaverns.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/snergles-caverns.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SNERGLE_CAVERN",
  title: "Snergle's Caverns",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(220, 155),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(440, 310)
  ),
  mapImageUrl: mapImage,
}

export default mapData;