const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");
const userRoute = express.Router();

userRoute.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        isAdmin: user.isAdmin,
        token: null,
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or Password");
    }
  })
);


// register route
userRoute.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email});
    if (existUser) {
      res.status(400);
      throw new Error("Email Already Registered");
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
        });
      }
      else{
        res.status(400);
        throw new Error("Invalid User Data")
      }
    }
  })
);

module.exports = userRoute;
