import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import RandomParty from "./components/RandomParty";
import NotFound from "./NotFound";
import Welcome from "./components/Welcome";

export enum Routes {
  Root = "/",
  RandomParty = "/random-party",
  ItemIdentifier = "/item-identifier"
}

const Routing: React.FC = () =>
  <Switch>
    <Route path={Routes.RandomParty} exact component={RandomParty} />
    <Route path={Routes.Root} exact component={Welcome} />
    <Route>
      <NotFound />
    </Route>
  </Switch>;

export default Routing;