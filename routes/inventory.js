//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");

//controllers
const { patch } = require("../controllers/handlers/inventory");

module.exports = router
  //endpoints
  .patch("/inventory/update=:id", auth, patch);
