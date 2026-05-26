const express = require("express");

const { addCar, getCar, getCarById, getmyposts, updateViews } = require("../controllers/addCar.controller");
const { verifyToken } = require("../middlewares/verifyToken");

const app = express.Router();


app.post("/add-car",verifyToken, addCar);
app.get("/get-car", getCar);
app.get("/get-car/:id", verifyToken, getCarById);

app.get("/my-posts/:userId",verifyToken, getmyposts);

app.patch("/cars/:id/views", updateViews)


module.exports = app;