const rateLimit = require("express-rate-limit");

module.exports = {
  limiter: rateLimit({
    windowMs: 15 * 60 * 1000, //15 mins
    max: 2, //
    message: "Too many account created for this IP, try again later!",
    standardHeaders: true,
    legacyHeaders: false,
  }),
};
