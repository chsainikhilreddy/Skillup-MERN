const express = require('express');
const cors = require('cors');
const api = express();
const user = require('./models/user');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
require('dotenv').config({path: "./config/.env"});

mongoose.connect(
    process.env.DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => console.log("Mongodb connected"));


api.use(cors());
api.use(express.json());
api.use(userRoutes);


api.listen(5000, () => console.log("API listening on PORT 5000"));
