import { Router } from 'express';
import AssetRoutes from './AssetRoute';
import Route from './RouteAbstract';

const app = Router();

const allRoutes: Array<Route> = [new AssetRoutes()];

// load router
for (const route of allRoutes) {
  app.use(route.getPrefix(), route.getRouter());
}

export default app;
