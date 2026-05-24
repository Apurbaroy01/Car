const express = require("express");

const addCarController = require("../controllers/addCar.controller");

const app = express.Router();

app.post("/add-car", addCarController);


module.exports = app;