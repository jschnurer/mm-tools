import { Routes } from "Routing";
import React from "react";
import { useParams } from "react-router-dom";
import InteractiveMap from "../InteractiveMap";
import { IMapLegendProps, IQuestModalProps } from "../MapTypes";
import MM6MapLegend from "./MM6MapLegend";
import MM6Quests from "./MM6Quests";
import mapDictionary from "./MapDictionary";

const MM6Map: React.FC = (props) => {
  let {
    map: mapSlug
  } = useParams();

  mapSlug = mapSlug || "ENROTH";

  if (mapSlug.toLowerCase() === "world") {
    mapSlug = "ENROTH";
  }

  let mapData = mapDictionary.find(x => x.slug === mapSlug);

  if (mapData) {
    return (
      <InteractiveMap
        {...props}
        initialMapView={mapData.initialMapView}
        allPOIs={mapData.pois}
        mapBounds={mapData.mapBounds}
        mapImageUrl={mapData.mapImageUrl}
        mapRouteTemplate={Routes.InteractiveMap.replace(":game", "mm6")}
        questModal={(props: IQuestModalProps) => (
          <MM6Quests
            {...props}
          />
        )}
        mapLegend={(props: IMapLegendProps) => (
          <MM6MapLegend
            {...props}
          />
        )}
      />
    );
  }

  return (
    <>Map {mapSlug} not found.</>
  );
};

export default MM6Map;