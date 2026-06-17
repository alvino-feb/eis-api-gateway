import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,

  JWT: {
    ACCESS_KEY:
      process.env.JWT_ACCESS_KEY,
    
    REFRESH_KEY:
      process.env.JWT_REFRESH_KEY,
  },

  SERVICES: {
    AUTH:
      process.env.AUTH_SERVICE_URL,

    APP_SETTING:
      process.env.APP_SETTING_SERVICE_URL,

    // PRODUCT:
    //   process.env.PRODUCT_SERVICE,

    // ORDER:
    //   process.env.ORDER_SERVICE,
  },
};