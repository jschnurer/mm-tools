import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import RandomParty from "./components/parties/RandomParty";
import NotFound from "./NotFound";
import About from "./components/About";
import Trainers from "components/mm-trainers/Trainers";
import Maps from "components/maps/Maps";
import GamePicker from "components/identifier/GamePicker";

export enum Routes {
  Root = "/",
  RandomParty = "/random-party",
  ItemIdentifier = "/item-identifier",
  ItemIdentifierForGame = "/item-identifier/:game",
  SkillTrainers = "/skill-trainers",
  Maps = "/maps",
}

const Routing: React.FC = () =>
  <Switch>
    <Route path={Routes.RandomParty} exact component={RandomParty} />
    <Route path={Routes.ItemIdentifier} exact component={GamePicker} />
    <Route path={Routes.ItemIdentifierForGame} exact component={GamePicker} />
    <Route path={Routes.SkillTrainers} exact component={Trainers} />
    <Route path={Routes.Maps} exact component={Maps} />
    <Route path={Routes.Root} exact component={About} />
    <Route>
      <NotFound />
    </Route>
  </Switch>;

export default Routing;