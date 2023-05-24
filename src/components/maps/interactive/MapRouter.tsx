import React from "react";
import { useParams } from "react-router";
import MM6Map from "./mm6/MM6Map";

const MapRouter: React.FC = (props) => {
  var {
    game,
  } = useParams();

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