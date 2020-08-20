// dependencies
require("dotenv").config();
const express = require('express');
const app = express();

const mongoURI = process.env.MONGO_URI; //M
// mongoose connection

const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true
}); //M