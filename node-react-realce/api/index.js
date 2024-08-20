const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
const users = require("./data/Users");
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

//connect db
mongoose
  .connect(process.env.MONGOOSEDB_RUL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require('./databaseSeeder');
// //database seeder routes
app.use("/api/seed", databaseSeeder);


app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});


















//username: rudamafra
//password: J0aquina
// mongodb+srv://rudamafra:J0aquina@cluster0.slaclg1.mongodb.net/REACT-NODE-REALCE

// api test test route
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const procuct = products.find((product)=>product.id == req.params.id)
  res.json(products);
});


app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((user)=>product.id == req.params.id)
  res.json(users);
});
