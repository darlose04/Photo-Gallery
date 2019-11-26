require("dotenv").config();

let PORT = process.env.PORT;
let SECRET_TEST_KEY = process.env.SECRET_TEST_KEY;

module.exports = {
  PORT,
  SECRET_TEST_KEY
};
