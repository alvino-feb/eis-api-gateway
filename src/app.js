import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import authProxy from "./proxies/auth.js";
import appSettingProxy from "./proxies/app-setting.js";
import inventoryProxy from "./proxies/inventory.js";

import { authenticate }
from "./common/middlewares/auth.js";

import { correlation }
from "./common/middlewares/correlation.js";

import swaggerRoute
from "./common/swagger/swagger.route.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
// app.use(correlation());

/*
|--------------------------------------------------------------------------
| Swagger
|--------------------------------------------------------------------------
*/

app.use(
  "/api/docs",
  swaggerRoute
);

/*
|--------------------------------------------------------------------------
| Auth Service
|--------------------------------------------------------------------------
*/

app.use(
  "/api/auth",
  authProxy
);

/*
|--------------------------------------------------------------------------
| App Setting Service
|--------------------------------------------------------------------------
*/

app.use(
  "/api/app-setting",
  authenticate,
  appSettingProxy
);

/*
|--------------------------------------------------------------------------
| Inventory Service
|--------------------------------------------------------------------------
*/

app.use(
  "/api/inventory",
  authenticate,
  inventoryProxy
);

export default app;