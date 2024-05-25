const { json } = require('express');
const connection = require('../config/database');
const { render } = require('ejs');
const { getAllUsers } = require('../services/CRUDService')




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
    console.log('=====================================');
    console.log('>>>> email: ', email);
    console.log('>>>> name: ', name);
    console.log('>>>> city: ', city);
    console.log('=====================================');
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

module.exports = {
    getHomePage, getCreateUser, postCreateUser
}