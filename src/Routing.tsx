import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import RandomParty from "./components/RandomParty";
import NotFound from "./NotFound";
import Welcome from "./components/Welcome";
import MM3Items from "components/mm3-items/MM3Items";

export enum Routes {
  Root = "/",
  RandomParty = "/random-party",
  MM3ItemIdentifier = "/item-identifier/mm3"
}

const Routing: React.FC = () =>
  <Switch>
    <Route path={Routes.RandomParty} exact component={RandomParty} />
    <Route path={Routes.MM3ItemIdentifier} exact component={MM3Items} />
    <Route path={Routes.Root} exact component={Welcome} />
    <Route>
      <NotFound />
    </Route>
  </Switch>;

export default Routing;