import { verifyAccessToken }
from "../helpers/jwt.js";

export const authenticate = (
  req,
  res,
  next
) => {

  try {

    // console.log(
    //   "AUTH HEADER:",
    //   req.headers.authorization
    // );

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {

      console.log("NO AUTH HEADER");

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });

    }

    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );

    console.log(
      "TOKEN:",
      token.substring(0, 30) + "..."
    );

    const payload =
      verifyAccessToken(token);

    console.log(
      "PAYLOAD:",
      payload
    );

    // req.user = payload;

    next();

  } catch (err) {

    console.error(
      "JWT ERROR:",
      err.message
    );

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }

};