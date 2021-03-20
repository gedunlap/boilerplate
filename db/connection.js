// grab environmental variables
require('dotenv').config()

// import mongoose
const mongoose = require('mongoose')

// import mercedlogger for color
const { log } = require('mercedlogger')

// bring in database string from .env
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/database"

//////////////////////////////////////////////////////
// Mongoose Configuration Object to Avoid Warnings
////////////////////////////////////////////////////

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

//////////////////////////////////////
// Make Database Connection
////////////////////////////////////

mongoose.connect(MONGODB_URL, config)

//////////////////////////////////////
// Handling Connection Events
////////////////////////////////////

mongoose.connection
    // Event for Conenction Open
    .on("open", () => log.green("STATUS", "Connected to Mongo"))
    // Event for Connection Close
    .on("close", () => log.red("STATUS", "Disconnected from Mongo"))
    // Event for Connection Errors
    .on("error", error => log.red("ERROR", error))

//////////////////////////////////////
// Export the Connection
////////////////////////////////////

module.exports = mongoose