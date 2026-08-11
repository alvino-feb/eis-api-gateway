import { ENV }
from "../common/constants/env.js";

import {
    createServiceProxy
}
from "../common/helpers/proxy.js";

export default
createServiceProxy(
    ENV.SERVICES.INVENTORY,
    "/api/inventory"
);

// import { createProxyMiddleware }
// from "http-proxy-middleware";

// import { ENV }
// from "../common/constants/env.js";

// export default createProxyMiddleware({

//   target:
//     ENV.SERVICES.INVENTORY,

//   changeOrigin: true,

//   pathRewrite: (path) => {
//     return `/api/inventory${path}`;
//   },

//   on: {
//     proxyReq(
//       proxyReq,
//       req
//     ) {

//       if (req.user) {

//         proxyReq.setHeader(
//           "x-user-id",
//           payload.user.userId
//         );

//         // proxyReq.setHeader(
//         //   "x-username",
//         //   payload.username
//         // );

//         proxyReq.setHeader(
//           "x-business-id",
//           payload.user.businessId
//         );

//         proxyReq.setHeader(
//           "x-business-member-id",
//           payload.user.businessMemberId || ""
//         );
//       }
//     },
//   },
// });