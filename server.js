// dependencies
require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;// mongoose connection


const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true
});

//Controller
const entriesController = require('./controllers/entries.js');
app.use('/entries', entriesController);

// Default route:
app.get("/", (req, res) => {
    res.redirect("/entries");
});

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})