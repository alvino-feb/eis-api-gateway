import crypto from "crypto";

export const correlation =
(
  req,
  res,
  next
) => {

  req.correlationId =
    crypto.randomUUID();

  next();

};