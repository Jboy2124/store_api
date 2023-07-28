require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const port = process.env.SERVER_PORT;
const app = express();

const { routes } = require("./routes/handler/route-handler");
const corsOptions = require("./config/cors/cors-origin");
// const configSession = require("./config/session/session-config");

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(routes());

//statics
app.use("/assets/products", express.static("./assets/products"));

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
