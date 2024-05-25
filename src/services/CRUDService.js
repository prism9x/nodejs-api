const connection = require('../config/database')

const getAllUsers = async () => {
    // thực hiện truy vấn db lấy tất cả các user
    let [results, fields] = await connection.query('select * from Users');
    return results;
}
const getUserByID = async (userId) => {
    // thực hiện truy vấn vào db lấy theo id
    let [result, fields] = await connection.query('select * from Users where id = ?', [userId])
    // query trả về 1 mảng obj nên ta lấy phần tử đầu tiên
    let user = result && result.length > 0 ? result[0] : {}
    return user;
}

const updateUserById = async (id, email, name, city) => {
    let [results, fields] = await connection.query(`UPDATE Users
                                                    SET email= ?, name=?, city=?
                                                    WHERE id= ?`, [email, name, city, id])
}

module.exports = {
    getAllUsers, getUserByID, updateUserById
};