import express from "express";
import swaggerUi from "swagger-ui-express";

import {
  buildSwagger
}
from "./swagger.aggregate.js";

const router =
  express.Router();

router.get(
  "/json",
  async (
    req,
    res
  ) => {

    const swagger =
      await buildSwagger();

    res.json(swagger);

  }
);

router.use(
  "/",
  swaggerUi.serve
);

router.get(
  "/",
  async (
    req,
    res
  ) => {

    const swagger =
      await buildSwagger();

    res.send(
      swaggerUi.generateHTML(
        swagger
      )
    );

  }
);

export default router;