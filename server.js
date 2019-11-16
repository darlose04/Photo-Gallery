const cors = require("cors");
const express = require("express");
const uuid = require("uuid/v4");
const config = require("./config");
const stripe = require("stripe")(config.SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add the Stripe Secret Key to the .require('stripe') statement");
});

const PORT = app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
