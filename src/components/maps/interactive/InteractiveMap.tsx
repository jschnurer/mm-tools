import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Map, ImageOverlay, Marker, Popup, Tooltip } from "react-leaflet"
import mm6WorldMap from "media/maps/mm6/mm6-world.png";
import { CRS, LatLng, LatLngBounds, LeafletMouseEvent } from "leaflet";
import FlowLayout from "components/layout/FlowLayout";
import "./InteractiveMap.scoped.scss";
import POI from "./POI";

interface IInteractiveMapProps {
  game: string,
  map: string,
}

const bounds = new LatLngBounds(new LatLng(0, 0), new LatLng(2385, 3975));

interface IPOI {
  name: string,
  desc: string,
  position: LatLng,
}

const InteractiveMap: React.FC<RouteComponentProps<IInteractiveMapProps>> = (props) => {
  const [pois, setPois] = useState<IPOI[]>([{
    name: "Test marker",
    desc: "quest 1, quest 2, quest 3",
    position: new LatLng(975, 2285),
  }]);

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
                {...poi}
                onClick={() => onRemoveMarkerClick(poi)}
              />
            </Popup>
            <Tooltip>
              <POI
                {...poi}
              />
            </Tooltip>
          </Marker>
        ))}
      </Map>
    </FlowLayout>
  );
};

export default InteractiveMap;