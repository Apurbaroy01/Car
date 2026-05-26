const Car = require("../models/AddCar");



const addCar = async (req, res) => {
        const userId = req.token;
        console.log("User ID from token:", userId);

        try {
                const data = req.body;
                console.log("Parsed data:", data);

                const payload = {
                        ...data,
                        owner: userId.id,
                        email: userId.email
                };

                const newCar = await Car.create(payload);
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

                // all cars
                const cars = await Car.find({ owner: userId }).lean();
                if (!cars) {
                        return res.status(404).json({ message: "Car not found" });
                }

                // total views aggregation
                const totalViewsResult = await Car.aggregate([
                        {
                                $match: {
                                        owner: userId
                                }
                        },
                        {
                                $group: {
                                        _id: null,
                                        totalViews: {
                                                $sum: "$views"
                                        }
                                }
                        }

                ]);
                const totalViews = totalViewsResult[0]?.totalViews || 0;
                // total posts
                const totalPosts = cars.length;


                res.status(200).json({ success: true, totalViews, totalPosts, cars });

        } catch (error) {
                console.error("Error fetching user's cars:", error);
                res.status(400).json({ message: error.message });
        }
};

const updateViews = async (req, res) => {
        try {
                const { id } = req.params;
                const result = await Car.findByIdAndUpdate(
                        id,
                        { $inc: { views: 1 } },
                        { new: true })
                        .lean();
                res.status(200).json(result);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

module.exports = { addCar, getCar, getCarById, getmyposts, updateViews };