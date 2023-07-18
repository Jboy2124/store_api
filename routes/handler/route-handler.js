const Profile = require("../profile");
const User = require("../user");
const Product = require("../products");
const Inventory = require("../inventory");
const Transaction = require("../transaction");

module.exports = {
  routes: () => {
    return [Profile, User, Product, Inventory, Transaction];
  },
};
