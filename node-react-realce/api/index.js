const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
const users = require("./data/Users");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");

//connect db
mongoose
  .connect(process.env.MONGOOSEDB_RUL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });
app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());

app.use(cors());

// //database seeder routes
app.use("/api/seed", databaseSeeder);

// //routes for users
app.use("/api/users", userRoute);

// routes for products
app.use("/api/products", productRoute);

// routes for orders
app.use("/api/orders", orderRoute);

// paypal payment api for client key
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//username: rudamafra
//password: J0aquina
// mongodb+srv://rudamafra:J0aquina@cluster0.slaclg1.mongodb.net/REACT-NODE-REALCE

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const user = users.find((user)=>product.id == req.params.id)
//   res.json(users);
// });
