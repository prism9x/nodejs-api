const User = require('../models/user')


const getUsersApi = async (req, res) => {
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
const putUserApi = async (req, res) => {
    let { id, email, name, city } = req.body;
    let user = await User.updateOne({ _id: id }, { email, name, city })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}


module.exports = {
    getUsersApi,
    postUserApi,
    putUserApi,
}

