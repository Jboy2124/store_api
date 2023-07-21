//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { auth } = require("../controllers/middlewares/jwt");
const { image } = require("../controllers/middlewares/multer");
const { upload } = require("../controllers/middlewares/upload-image");

//controllers
const { post, get, postImage } = require("../controllers/handlers/products");

module.exports = router
  //endpoints
  .post("/product/new", auth, post)
  .post("/product/image", auth, upload().single("prodImage"), postImage)
  .get("/products", get);
