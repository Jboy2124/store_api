//libraries
const express = require("express");
const router = express.Router();

//controllers
const { post } = require("../controllers/handlers/transaction");

module.exports = router
  //endpoints
  .post("/transaction/new", post);
