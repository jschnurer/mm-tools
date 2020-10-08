import React from "react";
import FlowLayout from "components/layout/FlowLayout";
import PageTitle from "components/layout/PageTitle";
import mm7BarrowMap from "media/mm7/barrows.png"
import "./Maps.scoped.scss";
import { Link } from "react-router-dom";
import { Routes } from "Routing";

const Maps: React.FC = () => {
  return (
    <FlowLayout
      header={(
        <>
          <PageTitle title="Maps" />
        </>
      )}
    >
      <Link to={Routes
        .InteractiveMap
        .replace(":game", "mm6")
        .replace(":map", "world")
      }>Interactive MM6 World Map</Link>
      <h2>MM7 Barrows Map</h2>
      <img
        src={mm7BarrowMap}
        alt="MM7 Barrows Map"
      />
    </FlowLayout>
  );
}

export default Maps;