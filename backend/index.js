const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express()

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Mongoose Connection ==========================================
const ConnectMongoose = async () => {
    const MONGO_URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Mongoose Connected")

    } catch (error) {
        console.error("❌ Mongoose Error:", error.message)
    } finally {
        // await mongoose.connection.close();
    }
}

async function run() {
    try {
        await ConnectMongoose();
        console.log("✅ Connected to MongoDB");

        // Routes
        const addCarRoutes = require("./routes/addCar.route");
        app.use("/", addCarRoutes);

    } catch (error) {
        console.error("Error connecting to MongoDB❌:", error);
    } finally {
        console.log("MongoDB connection closed.");
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})