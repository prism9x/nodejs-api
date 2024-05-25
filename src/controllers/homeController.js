const { json } = require('express');
const connection = require('../config/database');
const { render } = require('ejs');
const { getAllUsers, getUserByID, updateUserById } = require('../services/CRUDService')


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    console.log(">>> Check result: ", results);
    res.render('home.ejs', { listUsers: results });
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body;
    // Thực hiện insert vào db
    // const sql = 'INSERT INTO Users (email, name, city) VALUES(?, ?, ?)';
    // const value = [email, name, city];
    // connection.query(sql, value, (err, results) => {
    //     console.log(results);
    //     res.send('Created Successful');
    // });
    let [results, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES(?, ?, ?)', [email, name, city])

    // const [rows, fields] = await connection.execute('SELECT * FROM `Users`');

    console.log('>>> Check results: ', results)
    res.send('Create user successful')
}
const getUpdateUser = async (req, res) => {
    let user = await getUserByID(req.params.id);
    console.log(">>> Check user: ", user)
    res.render('edit.ejs', { userEdit: user });

}
const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body;
    await updateUserById(id, email, name, city)
    res.send('Update user successful')
}

module.exports = {
    getHomePage,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser
}