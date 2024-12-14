// Importing Modules
const express = require("express");
const mongoose = require('mongoose');


const cors = require("cors");

// Inititating Express
const app = express();

// Environment Variables
require('dotenv').config();


// Connecting to Database

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));


// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

// CORS
app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);

// Routes
const routes = require("./routes/routes");
app.use(routes);
