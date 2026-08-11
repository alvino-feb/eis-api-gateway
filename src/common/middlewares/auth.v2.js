import jwt from "jsonwebtoken";
import { ENV } from "../common/constants/env.js";

export const verifyAccessToken = (
    req,
    res,
    next
) => {
    const auth = req.headers.authorization;
    if (
        !auth ||
        !auth.startsWith("Bearer ")
    ) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
    const token = auth.substring(7);
    try {
        const payload =
            jwt.verify(
                token,
                ENV.JWT.ACCESS_KEY
            );
        req.user = payload;
        next();
    } catch {
        return res.status(401).json({
            success: false,
            message:
                "Invalid access token",
        });
    }
};