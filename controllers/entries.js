const express = require('express');
const router = express.Router();
const Entry = require('../models/entries.js');

// add routes
// Index
router.get('/', (req, res) => {
    res.render('Index');
    // Entry.find({}, (error, allEntries) => {
    //     res.render('entries/Index', {
    //         entries: allEntries
    //     })
    // });
});

// export router
module.exports = router;