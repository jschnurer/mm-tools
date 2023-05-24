import { Routes } from "Routing";
import FlowLayout from "components/layout/FlowLayout";
import PageTitle from "components/layout/PageTitle";
import classList from "helpers/styleHelpers";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./GamePicker.module.scss";
import MM1Id from "./MM1Id";
import MM2Id from "./MM2Id";
import MM3Id from "./MM3Id";
import MMXeenId from "./MMXeenId";

const GamePicker: React.FC = (props) => {
  const {
    game,
  } = useParams();
  
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
      <FlowLayout
        header={(
          <PageTitle title="M&amp;M Item Identifier" />
        )}
      >
        <div className={classList(styles.gameList)}>
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
      </FlowLayout>
    );
  }
}

export default GamePicker;