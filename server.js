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

//////////API TESTING//////////
//https://stackoverflow.com/questions/57362401/react-what-is-the-correct-way-to-make-an-api-call-with-user-input

//https://www.youtube.com/watch?v=CAPaHp7l1-I
// app.post('/', function(req, res) {
//     accessGiantBomb(req.body.gameName);
//     res.send('success')
// });

// const accessGiantBomb = (gameName) => {
//     var request = require('request');

//     var options = {
//         method: "POST",
//         url: `https://www.giantbomb.com/api/games/?format=json&api_key=${GB_API_KEY}`
//     }
// }
//////////API TESTING//////////