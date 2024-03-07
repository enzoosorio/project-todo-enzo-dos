const mongoose = require("mongoose");
require("dotenv").config();

const database = "Tasks";

const uri = process.env.MONGO_DB_URI

const connectToDatabase = async () => {

    // aseguramos que si ya estamos conectados, no volveremos a hacer la peticion

    try {
        const db = await mongoose.connect(uri);
        console.log(`Connected successfully to ${database}`);


    } catch (error) {
        console.error(`Error trying to connect ${database}: ${error}`);
    }
};

module.exports = {
    connectToDatabase
}