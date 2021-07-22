import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import Channel1 from "../pages/channel/Channel-1";
import Channel2 from "../pages/channel/Channel-2";
import Channel3 from "../pages/channel/Channel-3";
import Channel4 from "../pages/channel/Channel-4";
import Login from "../pages/login/Login";



const Routes = () => {
  return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/channel-1" exact component={Channel1} />
  				<Route path="/channel-2" component={Channel2} />
  				<Route path="/channel-3" component={Channel3} />
  				<Route path="/channel-4" component={Channel4} />
        </Switch>
      </ConnectedRouter>
  );
};

export default Routes;
