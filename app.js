const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const routes = require("./app/routes");
dotenv.config();
const port = parseInt(process.env.APP_PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", routes);
app.use((req, res) => {
  res.status(404).send("<h2>The path is not valid<h2>");
});
app.listen(port, () => {
  console.log(`Server running at Port ${port}`);
});
