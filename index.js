require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.SERVER_PORT;
const app = express();

const { routes } = require("./routes/handler/route-handler");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(routes());

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
