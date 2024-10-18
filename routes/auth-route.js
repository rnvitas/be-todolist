const express = require("express");
const { regist, login, getUser } = require("../controllers/auth-controller");

const route = express.Router();

route.post("/regist", regist);
route.post("/login", login);
route.get("/users", getUser);

module.exports = route;
