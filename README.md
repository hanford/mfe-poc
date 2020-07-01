# Shared Components & Routes

This example demos two applications with their own sets of routes and deployments but a seamless experience for the user.

- `dazzle` contains the "People Page" (/) route.
- `reviews-frontend` contains the "Create Page" (/admin/reviews/create) and "Audit Page" (/admin/reviews/audit).
- `dazzle` also exposes `Navigation` component.

# Running Demo

Run `yarn start`. This will build and serve both `dazzle` and `reviews-frontend` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)
  <img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/SharedRoutes2">
