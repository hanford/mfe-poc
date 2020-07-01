import React from "react";

const HomePage = React.lazy(() => import("./pages/people/audit"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
    fullPage: false,
  },
];

export default routes;
