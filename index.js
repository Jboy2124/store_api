require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.SERVER_PORT;
const allRoutes = require('./routes/main-routes')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
