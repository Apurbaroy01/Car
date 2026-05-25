const express = require("express");

const { addCar, getCar, getCarById } = require("../controllers/addCar.controller");
const { verifyToken } = require("../middlewares/verifyToken");

const app = express.Router();


app.post("/add-car", addCar);
app.get("/get-car", getCar);
app.get("/get-car/:id", verifyToken, getCarById);


module.exports = app;