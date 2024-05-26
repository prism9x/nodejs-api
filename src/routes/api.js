const express = require('express');
const routerApi = express.Router();

const { getUsersApi, postUserApi, putUserApi } = require('../controllers/apiController')

routerApi.get('/', (req, res) => {
    res.send("Hello api");
})

routerApi.get('/users', getUsersApi);
routerApi.post('/users', postUserApi);
routerApi.put('/users', putUserApi);


module.exports = routerApi;