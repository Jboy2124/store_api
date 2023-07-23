//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");
const { image } = require("../controllers/middlewares/multer");

//controllers
const { post, get } = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", image(), post)
  .get("/products", get);
