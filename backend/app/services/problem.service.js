const problemModel = require('../models/problem.model');

exports.getAllProblems = async () => {
    try {
        const problems = await problemModel.getAllProblems();
        return problems;
    } catch (error) {
        throw error;
    }    
}

exports.getProblemById = async (id) => {
    try {
        const problem = await problemModel.getProblemById(id);
        return problem;
    } catch (error) {
        throw error;
    }
}