//libraries
const express = require("express");
const router = express.Router();

//middlewares

//controllers
const { initial, publicToken } = require("../controllers/handlers/initial");

module.exports = router
  .get("/initial/loading", initial)
  .get("/session/public/access", publicToken);
