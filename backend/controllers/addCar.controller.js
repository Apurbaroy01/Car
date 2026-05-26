const Car = require("../models/AddCar");



const addCar = async (req, res) => {

        try {
                const data = req.body;
                console.log("Parsed data:", data);
                const newCar = await Car.create(data);
                res.status(201).json(newCar);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

const getCar = async (req, res) => {
        try {
                const cars = await Car.find().lean();
                res.status(200).json(cars);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

const getCarById = async (req, res) => {
        try {
                const { id } = req.params;
                const car = await Car.findById(id).lean();
                if (!car) {
                        return res.status(404).json({ message: "Car not found" });
                }
                res.status(200).json(car);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

const getmyposts = async (req, res) => {

        try {
                const userId = req.params.userId;
                console.log("User ID from params:", userId);
                console.log("Token payload:", req.token);

                const cars = await Car.find({ owner: userId }).lean();
                res.status(200).json(cars);
  
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

module.exports = { addCar, getCar, getCarById, getmyposts };