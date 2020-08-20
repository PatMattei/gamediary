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

//Create

//Edit
router.get('/:id', (req, res) => {
    Entry.findById(req.params.id, (error, foundEntry) => {
        res.render('Show', {
            entry: foundEntry
        })
    })
})

//Shows


// export router
module.exports = router;