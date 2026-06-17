import jwt from "jsonwebtoken";
import { ENV } from "../constants/env.js";

export const verifyAccessToken =
  (token) => {
    return jwt.verify(
      token,
      ENV.JWT.ACCESS_KEY
    );

  };