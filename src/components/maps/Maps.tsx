import React from "react";
import PageLayout from "components/layout/PageLayout";
import PageTitle from "components/layout/PageTitle";
import mm7BarrowMap from "media/mm7/barrows.png"
import "./Maps.scoped.scss";

const Maps: React.FC = () => {
  return (
    <PageLayout
      header={(
        <>
          <PageTitle title="Maps" />
        </>
      )}
    >
      <h2>MM7 Barrows Map</h2>
      <img
        src={mm7BarrowMap}
        alt="MM7 Barrows Map"
      />
    </PageLayout>
  );
}

export default Maps;