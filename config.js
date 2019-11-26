require("dotenv").config();

let PORT = process.env.PORT;
let SECRET_TEST_KEY = process.env.SECRET_TEST_KEY;
let SECRET_LIVE_KEY = process.env.SECRET_LIVE_KEY;

module.exports = {
  PORT,
  SECRET_TEST_KEY,
  SECRET_LIVE_KEY
};
