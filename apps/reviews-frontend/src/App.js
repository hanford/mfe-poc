import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";

import Navigation from "dazzle/Navigation";
import remoteRoutes from "dazzle/routes";

import localRoutes from "./routes";

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <h1>Reviews Frontend</h1>
    <div style={{ display: "flex" }}>
      <Navigation />
      <div style={{ width: "100%" }}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </React.Suspense>
      </div>
    </div>
  </HashRouter>
);

export default App;
