require("dotenv").config();

let SECRET_TEST_KEY = process.env.SECRET_TEST_KEY;
let SECRET_LIVE_KEY = process.env.SECRET_LIVE_KEY;

module.exports = {
  SECRET_TEST_KEY,
  SECRET_LIVE_KEY
};
