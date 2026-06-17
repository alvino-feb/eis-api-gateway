import axios from "axios";

import { ENV }
from "../constants/env.js";

export const buildSwagger =
  async () => {

    const [
      auth,
      appSetting,
    ] = await Promise.all([

      axios.get(
        `${ENV.SERVICES.AUTH}/api-docs-json`
      ),

      axios.get(
        `${ENV.SERVICES.APP_SETTING}/api-docs-json`
      ),

    ]);

    const authPaths = {};
      Object.entries(auth.data.paths)
      .forEach(([path, value]) => {
      authPaths[`/api/auth${path}`] = value;
    });

    const appSettingPaths = {};
    Object.entries(appSetting.data.paths)
      .forEach(([path, value]) => {

      appSettingPaths[
        `/api/app-setting${path}`
      ] = value;

    });

    return {

      openapi: "3.0.0",

      info: {
        title: "EIS API",
        version: "1.0.0",
      },

      paths: {
        ...authPaths,
        ...appSettingPaths,
      },

      components: {
        securitySchemes: {
          bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          },
        },

        schemas: {

          ...(auth.data.components
            ?.schemas || {}),

          ...(appSetting.data.components
            ?.schemas || {}),

        },

      },

    };

  };