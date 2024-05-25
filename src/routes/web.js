const express = require('express');
const {
    getHomePage,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser } = require('../controllers/homeController');
const router = express.Router();


// Home
router.get('/', getHomePage)

// Create
router.get('/create', getCreateUser)
router.post('/create-user', postCreateUser)

// Edit
router.get('/update/:id', getUpdateUser)
router.post('/update-user', postUpdateUser)

module.exports = router;