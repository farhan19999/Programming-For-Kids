const userModel = require('../models/user.model')

exports.getAllUsers = async ()=>{
    try {
        const users = await userModel.getAllUsers()
        return users
    } catch (error) {
        console.log(error)
    }
}

exports.getUserById = async (id)=>{
    try {
        const user = await userModel.getUserById(id)
        return user
    } catch (error) {
        console.log(error)
    }
}

exports.createUser = async (user)=>{
    try {
        const newUser = await userModel.createUser(user)
        return newUser
    } catch (error) {
        console.log(error)
    }
}

exports.updateUser = async (id, user)=>{
    try {
        const updatedUser = await userModel.updateUser(id, user)
        return updatedUser
    } catch (error) {
        console.log(error)
    }
}
exports.deleteUser = async (id)=>{
    try {
        const deletedUser = await userModel.deleteUser(id)
        return deletedUser
    } catch (error) {
        console.log(error)
    }
}

exports.getRegisteredContests = async (id)=>{
    try {
        const contest = await userModel.getRegisteredContests(id)
        return contest
    } catch (error) {
        console.log(error)
    }
}

exports.getAllPracticeSubmissionByUserId = async (id)=>{
    try {
        const submissions = await userModel.getAllPracticeSubmissionByUserId(id)
        return submissions
    } catch (error) {
        console.log(error)
    }
}


exports.addRegisteredContest = async (id, contestid)=>{
    try {
        const updatedUser = await userModel.addRegisteredContest(id, contestid)
        return updatedUser
    } catch (error) {
        console.log(error)
    }
}