const express = require('express');
const router = express.Router();

router.get('/abc', (req, res) => {
    res.send('Check ABC')
})

router.get('/halo', (req, res) => {
    res.render('sample.ejs');
})

module.exports = router;