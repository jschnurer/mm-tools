import React from "react";
import PageLayout from "components/layout/PageLayout";
import PageTitle from "components/layout/PageTitle";
import { Routes } from "Routing";
import { Link, RouteComponentProps } from "react-router-dom";
import "./GamePicker.scoped.scss";
import MM3Id from "./MM3Id";
import MMXeenId from "./MMXeenId";
import MM2Id from "./MM2Id";
import MM1Id from "./MM1Id";

interface IGamePickerProps {
  game: string,
}

const GamePicker: React.FC<RouteComponentProps<IGamePickerProps>> = (props) => {
  const game = props.match.params.game;
  
  if (game === "mm1") {
    return <MM1Id />;
  } else if (game === "mm2") {
    return <MM2Id />;
  } else if (game === "mm3") {
    return <MM3Id />;
  } else if (game === "mmxeen") {
    return <MMXeenId />;
  } else {
    return (
      <PageLayout
        header={(
          <PageTitle title="M&amp;M Item Identifier" />
        )}
      >
        <div>
          Choose game:
          
          <Link to={Routes.ItemIdentifierForGame.replace(':game','mm1')}>
            MM1
          </Link>

          <Link to={Routes.ItemIdentifierForGame.replace(':game','mm2')}>
            MM2
          </Link>

          <Link to={Routes.ItemIdentifierForGame.replace(':game','mm3')}>
            MM3
          </Link>
    
          <Link to={Routes.ItemIdentifierForGame.replace(':game','mmxeen')}>
            MM4/5
          </Link>
        </div>
      </PageLayout>
    );
  }
}

export default GamePicker;