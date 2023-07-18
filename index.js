require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.SERVER_PORT;
const app = express();

const Profile = require("./routes/profile");
const User = require("./routes/user");
const Product = require("./routes/products");
const Inventory = require("./routes/inventory");
const Transaction = require("./routes/transaction");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(Profile);
app.use(User);
app.use(Product);
app.use(Inventory);
app.use(Transaction);

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
