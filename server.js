// grab environment variables
require('dotenv').config()

// import express
const express = require('express')

// import DB connection
const mongoose = require('./db/connection')

// import mercedlogger
const { log } = require('mercedlogger')

// import middleware
const methodOverride = require('method-override')
const morgan = require('morgan')
const cors = require('cors')

// get port from env or derfault port
const PORT = process.env.PORT || "2021"

//////////////////////////////////////
// Create Express App
////////////////////////////////////

const app = express()

//////////////////////////////////////
// Set View Engine
////////////////////////////////////

app.set('view engine', 'ejs')

//////////////////////////////////////
// Setup Middleware
////////////////////////////////////

app.use(cors()) // Prevent Cors Errors if building an API
app.use(methodOverride('_method')) // Swap method of requests with _method query
app.use(express.static('public')) // Serve the public folder as static
app.use(morgan('tiny')) // Request logging
app.use(express.json()) // Parse json bodies
app.use(express.urlencoded({ extended: false})) //Parse bodies from form submission

//////////////////////////////////////
// Routes and Routers
////////////////////////////////////

// Test Route
app.get("/", (req,res) => {
    res.send("<h1>Welcome back Garrett.</h1>")
})

//////////////////////////////////////
// App Listener
////////////////////////////////////

app.listen(PORT, () => log.white("Server Launch", `Listening on Port ${PORT}`))