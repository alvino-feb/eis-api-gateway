import {
    createProxyMiddleware
}
from "http-proxy-middleware";

export const createServiceProxy = (
    target,
    prefix
) =>
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: path =>
            `${prefix}${path}`,

        on: {
            proxyReq(
                proxyReq,
                req
            ) {
                const auth = req.headers.authorization;
                if (auth) {
                    proxyReq.setHeader(
                        "authorization",
                        auth
                    );
                }
            }
        }
    });