import pois from "./shadowGuild.json";
import { formatPOI } from "components/maps/interactive/InteractiveMap";
import mapImage from "media/maps/mm6/shadow-guild.jpg";
import { IMapData } from "components/maps/interactive/MapTypes";
import { LatLng, LatLngBounds } from "leaflet";

const mapData: IMapData = {
  slug: "SHADOW_GUILD",
  title: "Shadow Guild",
  pois: pois.map(x => formatPOI(x)),
  initialMapView: {
    zoom: 0,
    center: new LatLng(165, 175),
  },
  mapBounds: new LatLngBounds(
    new LatLng(0, 0),
    new LatLng(330, 350)
  ),
  mapImageUrl: mapImage,
}

export default mapData;