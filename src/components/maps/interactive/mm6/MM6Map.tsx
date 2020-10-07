import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IMapRouteProps, IMapLegendProps, IQuestModalProps } from "../MapTypes";
import InteractiveMap from "../InteractiveMap";
import MM6Quests from "./MM6Quests";
import MM6MapLegend from "./MM6MapLegend";
import mapDictionary from "./MapDictionary";
import { Routes } from "Routing";

const MM6Map: React.FC<RouteComponentProps<IMapRouteProps>> = (props) => {
  let mapSlug = props.match.params.map || "ENROTH";

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