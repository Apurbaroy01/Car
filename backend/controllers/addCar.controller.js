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

                // get all cars
                const cars = await Car.find({ owner: userId }).lean();

                // stats aggregation
                const statsResult = await Car.aggregate([
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
                                        },

                                        Available: {
                                                $sum: {
                                                        $cond: [
                                                                { $eq: ["$status", "Available"] },
                                                                1,
                                                                0
                                                        ]
                                                }
                                        },

                                        NotAvailable: {
                                                $sum: {
                                                        $cond: [
                                                                { $eq: ["$status", "Not Available"] },
                                                                1,
                                                                0
                                                        ]
                                                }
                                        },

                                        totalPosts: {
                                                $sum: 1
                                        }
                                }
                        }
                ]);

                const stats = statsResult[0] || {
                        totalViews: 0,
                        Available: 0,
                        NotAvailable: 0,
                        totalPosts: 0
                };

                res.status(200).json({
                        success: true,
                        ...stats,
                        cars
                });

        } catch (error) {
                console.error("Error fetching user's cars:", error);

                res.status(500).json({
                        success: false,
                        message: error.message
                });
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