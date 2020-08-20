const express = require('express');
const router = express.Router();
const Entry = require('../models/entries.js');

// add routes
// Index
router.get('/', (req, res) => {
    res.render('Index');
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

//Shows


// export router
module.exports = router;