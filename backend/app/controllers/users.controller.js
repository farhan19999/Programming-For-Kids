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

exports.getUserById = async (req, res) => {
    try {
        const user = await user_services.getUserById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = await user_services.createUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await user_services.updateUser(req.params.id, req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getRegisteredContests = async (req, res) => {
    try {
        const contest = await user_services.getRegisteredContests(req.params.id)
        res.status(200).json(contest)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllPracticeSubmissionByUserId = async (req, res) =>{
    try{
        const submissions = await user_services.getAllPracticeSubmissionByUserId(req.params.id)
        res.status(200).json(submissions)
    } catch (error){
        res.status(500).json(error)
    }

}

exports.addRegisteredContest = async (req, res) => {
    try {
        const contest = await user_services.addRegisteredContest(req.params.id, req.body.contestid)
        res.status(200).json(contest)
    } catch (error) {
        res.status(500).json(error)
    }
}