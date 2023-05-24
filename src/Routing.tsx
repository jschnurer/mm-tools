import Alchemy from "components/alchemy/Alchemy";
import GamePicker from "components/identifier/GamePicker";
import Maps from "components/maps/Maps";
import MapRouter from "components/maps/interactive/MapRouter";
import Trainers from "components/mm-trainers/Trainers";
import React from "react";
import {
  Route,
  Routes as Switch
} from "react-router-dom";
import NotFound from "./NotFound";
import About from "./components/About";
import RandomParty from "./components/parties/RandomParty";

export enum Routes {
  Root = "/",
  RandomParty = "/random-party",
  ItemIdentifier = "/item-identifier",
  ItemIdentifierForGame = "/item-identifier/:game",
  SkillTrainers = "/skill-trainers",
  Maps = "/maps",
  Alchemy = "/alchemy",
  InteractiveMap = "/maps/interactive/:game/:map",
}

const Routing: React.FC = () =>
  <Switch>
    <Route path={Routes.RandomParty} element={<RandomParty />} />
    <Route path={Routes.ItemIdentifier} element={<GamePicker />} />
    <Route path={Routes.ItemIdentifierForGame} element={<GamePicker />} />
    <Route path={Routes.SkillTrainers} element={<Trainers />} />
    <Route path={Routes.Maps} element={<Maps />} />
    <Route path={Routes.InteractiveMap} element={<MapRouter />} />
    <Route path={Routes.Alchemy} element={<Alchemy />} />
    <Route path={Routes.Root} element={<About />} />
    <Route element={<NotFound />} />
  </Switch>;

export default Routing;