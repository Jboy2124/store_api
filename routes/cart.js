const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");

//controllers
const { post, del } = require("../controllers/handlers/cart");

module.exports = router
  //endpoints
  .post("/product/cart/", post)
  .delete("/product/cart/delete", del);
