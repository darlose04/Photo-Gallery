require("dotenv").config();

let PORT = process.env.PORT;
let SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
  PORT,
  SECRET_KEY
};
