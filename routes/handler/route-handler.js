const Profile = require("../profile");
const User = require("../user");
const Product = require("../products");
const Inventory = require("../inventory");
const Transaction = require("../transaction");
const Initial = require("../initial");

module.exports = {
  routes: () => {
    return [Initial, Profile, User, Product, Inventory, Transaction];
  },
};
