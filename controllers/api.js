require("dotenv").config();

const express = require('express');
const router = express.Router();
const request = require('request');

const GB_API_KEY = process.env.GB_API_KEY;


fetch('https://api.github.com/users/hacktivist123/repos')
  .then(response => response.json())
  .then(data => console.log(data));


//////////API TESTING//////////
// router.post('/api', function(req, res, next) {
//     res.send('Test');
//     request.get(`http://www.giantbomb.com/api/games/?api_key=${GB_API_KEY}&format=json&query="mario bros."&resources=game`).on('response', function(response) {
//         console.log(response)
//     })
//     .pipe(request.put((res)));
// });
//////////API TESTING//////////




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