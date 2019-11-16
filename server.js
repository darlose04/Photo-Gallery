const cors = require("cors");
const express = require("express");
const uuid = require("uuid/v4");
const config = require("./config");
const stripe = require("stripe")(config.SECRET_TEST_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add the Stripe Secret Key to the .require('stripe') statement");
});

app.post("/checkout", async (req, res) => {
  console.log("Request: ", req.body);

  let error;
  let status;

  try {
    const {
      productName,
      productPrice,
      productSize,
      productType,
      token
    } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: productPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${productName} ${productSize} ${productType} print`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );

    console.log("Charge: ", { charge });
    status = "success";
  } catch (error) {
    console.log("Error: ", error);
    status = "failure";
  }

  res.json({ status, error });
});

const PORT = app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
