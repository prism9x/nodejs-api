const { json } = require('express');
const connection = require('../config/database');
const { render } = require('ejs');




const getHomePage = (req, res) => {
    res.render('home.ejs');
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log('>>>> req.body', req.body);
    res.send('create a new user');
}

module.exports = {
    getHomePage, getSample, postCreateUser
}