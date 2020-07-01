import React from "react";

const AuditPage = React.lazy(() => import("./pages/audit"));
const CreatePage = React.lazy(() => import("./pages/create"));

const routes = [
  {
    path: "/admin/reviews/audit",
    component: AuditPage,
  },
  {
    path: "/admin/reviews/create",
    component: CreatePage,
  },
];

export default routes;
