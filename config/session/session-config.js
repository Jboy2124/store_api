const session = require("express-session");

const configSession = session({
  secret: process.env.SESSION_ACCESS_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "strict",
    // secure: true,
    httpOnly: true,
  },
});

module.exports = configSession;
