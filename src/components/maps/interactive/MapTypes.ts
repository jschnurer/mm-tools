import { Icon, LatLng, LatLngBounds } from "leaflet";

export type POILinkType = "poi" | "quest" | "position" | "map";

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
  icon: Icon,
  searchNote?: string,
  iconKey: string,
}

export interface IMapLocation {
  zoom: number,
  center: LatLng,
}

export interface ILegend {
  [index: string]: boolean
}

export interface IQuestModalProps {
  focusQuestSlug: string,
  onClose(): void,
}

export interface IMapLegendProps {
  currentLegend: ILegend,
  onApply: (legend: ILegend) => void,
  onClose: () => void,
}

export interface IMapData {
  slug: string,
  title: string,
  pois: IPOI[],
  initialMapView: IMapLocation,
  mapBounds: LatLngBounds,
  mapImageUrl: string,
}