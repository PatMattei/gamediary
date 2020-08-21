const express = require('express');
const router = express.Router();
const Entry = require('../models/entries.js');
//const Entry = require('../models/seed.js');

// add routes
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

        //hardcode the entry date for now:
        req.body.entryDate = '2020-08-20T15:17:27.282+00:00',
        res.redirect(`/entries/${req.params.id}`);
    });
});

//Create
router.post('/', (req, res) => {
    req.body = {
        entryDate: '2020-08-20T15:17:27.282+00:00',
        dayEntry: req.body.dayEntry,
        games: [{
            gameName: req.body.gameName,
            gameImgSrc: req.body.gameImgSrc,
            gameEntry: req.body.gameEntry
        }]
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