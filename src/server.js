const express = require('express') // common js
const path = require('path') // common js
const configViewEngine = require('./config/viewEngine'); // config view engine
const webRoutes = require('./routes/web');
const connection = require('./config/database');
require('dotenv').config();


const app = express() // app express
const port = process.env.PORT || 8888 // port
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// config router
app.use('/', webRoutes);

// config template engine
configViewEngine(app);

app.listen(port, hostname, () => {
    console.log(`Example app listening ${hostname + ":" + port}`)
})