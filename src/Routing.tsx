import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import RandomParty from "./components/RandomParty";
import NotFound from "./NotFound";

export enum Routes {
  RandomParty = "/random-party",
  ItemIdentifier = "/item-identifier"
}

const Routing: React.FC = () =>
  <Switch>
    <Route path={Routes.RandomParty} exact component={RandomParty} />
    <Route>
      <NotFound />
    </Route>
  </Switch>;

export default Routing;