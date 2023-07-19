const session = require("express-session");

const configSession = session({
  name: "_session-id",
  secret: process.env.SESSION_ACCESS_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "strict",
    secure: false, //change to true when production
    httpOnly: true,
  },
});

module.exports = configSession;
