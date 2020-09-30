import { LatLng } from "leaflet";

export type POILinkType = "submap" | "quest" | "position" | "map";

export interface IPOILink {
  type: POILinkType,
  slug: string,
  text: string,
  position?: LatLng,
}

export interface IPOI {
  slug: string,
  name: string,
  note?: string,
  position: LatLng,
  links?: IPOILink[],
}