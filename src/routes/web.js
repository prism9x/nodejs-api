const express = require('express');
const { getHomePage, getSample, postCreateUser } = require('../controllers/homeController');
const router = express.Router();


// GET
router.get('/', getHomePage)
router.get('/sample', getSample)

// POST
router.post('/create-user', postCreateUser)

module.exports = router;