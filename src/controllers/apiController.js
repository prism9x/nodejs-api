const User = require('../models/user')
const getUsersApi = async (req, res) => {
    // Find all User
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postUserApi = async (req, res) => {
    let { email, name, city } = req.body;
    let user = await User.create({ email, name, city })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

module.exports = {
    getUsersApi,
    postUserApi
}

