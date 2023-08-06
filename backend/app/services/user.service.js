const userModel = require('../models/user.model')

exports.getAllUsers = async ()=>{
    try {
        const users = await userModel.getAllUsers()
        return users
    } catch (error) {
        console.log(error)
    }
}