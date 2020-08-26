const express = require('express');
const router = express.Router();
const axios = require("axios");
const Entry = require('../models/entries.js');

const GB_API_KEY = process.env.GB_API_KEY;

// Index
router.get('/', (req, res) => {
    Entry.find({}, (error, allEntries) => {
        res.render('Index', {
            entries: allEntries
        })
    });
});

//New
router.get('/new', (req, res) => {
    res.render('New');
})

//Delete
router.delete('/:id', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, entry) => {
        res.redirect('/entries');
    });
});

//Update
router.put('/:id', (req, res) => {
    let gamesData = "";

    if (typeof req.body.gameName === "object") {
        //iterate through each gameName
        gamesData = req.body.gameName.map((game, index) => {
        //push game name into object
            return {
                gameName: req.body.gameName[index],
                gameImgSrc: req.body.gameImgSrc[index],
                gameEntry: req.body.gameEntry[index]
            }
        });
    } else {
        gamesData = [{
            gameName: req.body.gameName, 
            gameImgSrc: req.body.gameImgSrc,
            gameEntry: req.body.gameEntry
        }];
    }
    req.body.games = gamesData;
    
    //Delete the original entries passed since we have the array of them in gamesData
    delete req.body.gameName;
    delete req.body.gameImgSrc;
    delete req.body.gameEntry;

    Entry.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect(`/entries/${req.params.id}`);
    });
});

router.get('/api/:query', function(req, res) {
    var qs = {
      params: {
        query: req.params.query,
        resources: "game",
        api_key: GB_API_KEY,
        limit: 100,
        format: "json"
      }
    };

    axios.get('https://www.giantbomb.com/api/search/', qs)
      .then(function (response) {
        // handle success
        res.render('components/ApiFoundGamesList', {
            apiCall: response.data
        })
      })
  });

//Create
router.post('/', (req, res) => {
    let gamesData = "";

    if (typeof req.body.gameName === "object") {
        //iterate through each gameName
        gamesData = req.body.gameName.map((game, index) => {
        //push game name into object
            return {
                gameName: req.body.gameName[index],
                gameImgSrc: req.body.gameImgSrc[index],
                gameEntry: req.body.gameEntry[index]
            }
        });
    } else {
        gamesData = [{
            gameName: req.body.gameName, 
            gameImgSrc: req.body.gameImgSrc,
            gameEntry: req.body.gameEntry
        }];
    }
    
    //Delete the original entries passed since we have the array of them in gamesData
    delete req.body.gameName;
    delete req.body.gameImgSrc;
    delete req.body.gameEntry;

    req.body = {
        entryDate: req.body.entryDate,
        dayEntry: req.body.dayEntry,
        games: gamesData
    }
    Entry.create(req.body, (error, createdEntry) => {
        res.redirect('/entries');
    });
});


//Edit
router.get('/:id/edit', (req, res) => {
    Entry.findById(req.params.id, (err, foundEntry) => {
        res.render('Edit', {
            entry: foundEntry
        })
    })
})

//Shows
router.get('/:id', (req, res) => {
    Entry.findById(req.params.id, (error, foundEntry) => {
        res.render('Show', {
            entry: foundEntry
        })
    })
})

// export router
module.exports = router;