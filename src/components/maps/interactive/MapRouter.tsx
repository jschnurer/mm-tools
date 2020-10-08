import React from "react";
import { IMapRouteProps } from "./MapTypes";
import { RouteComponentProps } from "react-router-dom";
import MM6Map from "./mm6/MM6Map";

const MapRouter: React.FC<RouteComponentProps<IMapRouteProps>> = (props) => {
  const game = props.match.params.game;

  if (game === "mm6") {
    return (
      <MM6Map
        {...props}
      />
    );
  }

  return (
    <>
      Game {game} not found.
    </>
  );
};

export default MapRouter;