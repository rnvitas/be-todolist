const express = require("express");
const route = express.Router();
const todolistRoute = require("./todolist-route");

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di TODOLIST",
  });
});

// route.use("/regist");
// route.use("/login");
route.use("/todolist", todolistRoute);

module.exports = route;
