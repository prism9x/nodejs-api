const express = require('express');
const { getHomePage, getCreateUser, postCreateUser } = require('../controllers/homeController');
const router = express.Router();


// Home
router.get('/', getHomePage)

// Create
router.get('/create', getCreateUser)
router.post('/create-user', postCreateUser)

module.exports = router;