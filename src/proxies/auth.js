import { createProxyMiddleware }
from "http-proxy-middleware";

import { ENV }
from "../common/constants/env.js";

export default createProxyMiddleware({
  target: ENV.SERVICES.AUTH,
  changeOrigin: true,

  pathRewrite: (path) => {
    return `/api/auth${path}`;
  },

  on: {
    proxyReq(proxyReq, req) {
      console.log(
        "[AUTH]",
        req.originalUrl,
        "=>",
        `/api/auth${proxyReq.path}`
      );
    },
  },
});