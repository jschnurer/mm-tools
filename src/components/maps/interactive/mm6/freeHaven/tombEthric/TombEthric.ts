import { LatLng, LatLngBounds } from "leaflet";
import pois from "./tombEthric.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/tomb-ethric.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";

const mapData: IMapData = {
  slug: "ETHRIC",
  title: "Tomb of Ethric the Mad",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(150, 150),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(300, 300)
  ),
  mapImageUrl: mapImage,
}

export default mapData;