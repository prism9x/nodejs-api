const express = require('express');
const { getHomePage, getCreateUser, postCreateUser, getUpdateUser } = require('../controllers/homeController');
const router = express.Router();


// Home
router.get('/', getHomePage)
router.get('/update/:id', getUpdateUser)


// Create
router.get('/create', getCreateUser)
router.post('/create-user', postCreateUser)

module.exports = router;