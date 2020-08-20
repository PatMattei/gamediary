// dependencies
require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;
// mongoose connection

const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true
});

//Controller
const entriesController = require('./controllers/fruits.js');
app.use('/entries', entriesController);

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})