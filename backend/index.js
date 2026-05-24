const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express()

const port = process.env.PORT;


app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        await client.connect();
        console.log("You successfully connected to MongoDB!✅");
    } catch (error) {
        console.error("Error connecting to MongoDB❌:", error);
    } finally {
        await client.close();
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