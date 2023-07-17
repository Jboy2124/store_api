//libraries
const express = require("express");
const router = express.Router();

//middlewares
const { limiter } = require("../controllers/middlewares/rate-limit");

//controllers
const Profile = require("../controllers/handlers/profile");
const Product = require("../controllers/handlers/products");
const User = require("../controllers/handlers/user");
const Inventory = require("../controllers/handlers/inventory");
const Transactions = require("../controllers/handlers/transaction");

module.exports = router
  //profile
  .post("/profile/new", limiter, Profile.post)
  .patch("/profile/update=:id", Profile.patch)

  //products
  .post("/product/new", Product.post)

  //user
  .post("/login", User.login)

  //inventory
  .patch("/inventory/update=:id", Inventory.patch)

  //transactions
  .post("/transaction/new", Transactions.post);
