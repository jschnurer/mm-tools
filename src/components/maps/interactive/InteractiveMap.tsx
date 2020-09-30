import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map, ImageOverlay, Marker, Popup, Tooltip } from "react-leaflet"
import mm6WorldMap from "media/maps/mm6/mm6-world.png";
import { CRS, LatLng, LatLngBounds } from "leaflet";
import FlowLayout from "components/layout/FlowLayout";
import "./InteractiveMap.scoped.scss";
import POI from "./POI";
import mm6POIs from "./mm6.json";
import { IPOI, POILinkType } from "./MapTypes";

interface IInteractiveMapProps {
  game: string,
  map: string,
}

const bounds = new LatLngBounds(new LatLng(0, 0), new LatLng(2385, 3975));

const InteractiveMap: React.FC<RouteComponentProps<IInteractiveMapProps>> = (props) => {
  const [pois, setPois] = useState<IPOI[]>(mm6POIs.map(poi => ({
    slug: poi.slug,
    name: poi.name,
    note: poi.note,
    position: new LatLng(poi.position[0], poi.position[1]),
    links: (poi.links as any)?.map((l: any) => ({
      type: l.type as POILinkType,
      slug: l.slug,
      text: l.text,
      position: l.position
        ? new LatLng(l.position[0], l.position[1])
        : undefined,
    }))
  })));

  const onRemoveMarkerClick = (poi: IPOI) => {
    setPois(pois.filter(x => x !== poi));
  }

  return (
    <FlowLayout
      header={(
        <div className="header">
          Sup.
        </div>
      )}
    >
      <Map
        crs={CRS.Simple}
        minZoom={-2}
        maxZoom={2}
        zoom={-2}
        center={new LatLng(975, 2285)}
      >
        <ImageOverlay
          url={mm6WorldMap}
          bounds={bounds}
        />
        {pois.map(poi => (
          <Marker
            position={poi.position}
            key={poi.name}
          >
            <Popup>
              <POI
                poi={poi}
                showRemove
                onClick={() => onRemoveMarkerClick(poi)}
              />
            </Popup>
            <Tooltip>
              <POI
                poi={poi}
                showRemove={false}
              />
            </Tooltip>
          </Marker>
        ))}
      </Map>
    </FlowLayout>
  );
};

export default InteractiveMap;