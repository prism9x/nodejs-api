const express = require('express');
const routerApi = express.Router();

const { getUsersApi, postUserApi } = require('../controllers/apiController')

routerApi.get('/', (req, res) => {
    res.send("Hello api");
})

routerApi.get('/users', getUsersApi);
routerApi.post('/users', postUserApi);

module.exports = routerApi;