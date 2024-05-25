const { json } = require('express');
const connection = require('../config/database');
const { render } = require('ejs');
const { getAllUsers } = require('../services/CRUDService')
const User = require('../models/user')


const getHomePage = async (req, res) => {
    // Find all User
    let results = await User.find({});
    res.render('home.ejs', { listUsers: results });
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const getUpdateUser = async (req, res) => {
    let userId = req.params.id;

    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { user: user })
}

const postCreateUser = async (req, res) => {
    // Lấy ra giá trị từ request.body
    let { email, name, city } = req.body;
    // Insert User
    await User.create({ email, name, city })
    res.send('Create user successful')
}

module.exports = {
    getHomePage, getCreateUser, postCreateUser, getUpdateUser
}