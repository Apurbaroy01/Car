const express = require("express");

const { addCar, getCar, getCarById } = require("../controllers/addCar.controller");

const app = express.Router();

app.post("/add-car", addCar);
app.get("/get-car", getCar);
app.get("/get-car/:id", getCarById);


module.exports = app;