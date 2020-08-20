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
    res.redirect('Index');
})

//Update
router.put('/:id', (req, res) => {
    //req.body.readyToEat = req.body.readyToEat === "on" ? true : false;

    // Update the fruit document using our model
    Entry.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/entries');
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

    console.log (req.body);
        
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