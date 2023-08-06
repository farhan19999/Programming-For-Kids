const user_services = require('../services/user.service')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await user_services.getAllUsers()
        //console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}