const express = require("express");
const route = express.Router();
const todolistRoute = require("./todolist-route");
const authRoute = require("./auth-route");

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di TODOLIST",
  });
});

route.use("/:id_user/todos", todolistRoute);
route.use("/auth", authRoute);

module.exports = route;
