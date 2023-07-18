//libraries
const express = require("express");
const router = express.Router();

//middlewares

//controllers
const { patch } = require("../controllers/handlers/inventory");

module.exports = router
  //endpoints
  .patch("/inventory/update=:id", patch);
