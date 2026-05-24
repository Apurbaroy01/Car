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

module.exports = addCar;