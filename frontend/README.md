# web-shop

This project represents simple enterprise Angular workspace with Nx for a fictive online shop.

Horizontal slicing is done according to DDD with domains (aka scopes):  

Product | Order | Shared

while vertical slicing is done following Nx and Angular architects guidelines:  

- feature
- ui
- domain
- util

Each lib is tagged in two dimensions and linting is set to constrain upstream-downstream subdomain dependencies and also between each lib type.

## Development server

Run `nx serve web-shop` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
