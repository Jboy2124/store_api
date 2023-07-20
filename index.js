require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const port = process.env.SERVER_PORT;
const app = express();

const { routes } = require("./routes/handler/route-handler");
const corsOptions = require("./config/cors/cors-origin");
const configSession = require("./config/session/session-config");

app.use(cors(corsOptions));
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(configSession);

//routes
app.use(routes());

app.listen(port, () => {
  console.log("Server is running at port: ", port);
});
