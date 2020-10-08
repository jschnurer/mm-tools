import pois from "./shadowGuildHideout.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/shadow-guild-hideout.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SG_HIDEOUT",
  title: "Shadow Guild Hideout",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 1,
    center: new LatLng(110, 92),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(220, 185)
  ),
  mapImageUrl: mapImage,
}

export default mapData;