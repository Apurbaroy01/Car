const express = require("express");

const { addCar, getCar } = require("../controllers/addCar.controller");

const app = express.Router();

app.post("/add-car", addCar);
app.get("/get-car", getCar);


module.exports = app;