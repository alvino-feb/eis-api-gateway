import { createProxyMiddleware }
from "http-proxy-middleware";

import { ENV }
from "../common/constants/env.js";

export default createProxyMiddleware({

  target:
    ENV.SERVICES.APP_SETTING,

  changeOrigin: true,

  pathRewrite: (path) => {
    return `/api/app-setting${path}`;
  },

  on: {
    proxyReq(
      proxyReq,
      req
    ) {

      if (req.user) {

        proxyReq.setHeader(
          "x-user-id",
          payload.user.userId
        );

        // proxyReq.setHeader(
        //   "x-username",
        //   payload.username
        // );

        proxyReq.setHeader(
          "x-business-id",
          payload.user.businessId
        );

        proxyReq.setHeader(
          "x-business-member-id",
          payload.user.businessMemberId || ""
        );

      }

    },

  },

});