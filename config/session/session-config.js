const session = require("express-session");

const configSession = session({
  name: "session-id",
  secret: process.env.SESSION_ACCESS_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "strict",
    secure: true, //change to true when production
    httpOnly: true,
  },
});

module.exports = configSession;
