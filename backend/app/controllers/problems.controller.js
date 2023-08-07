const problemService = require('../services/problem.service');

exports.getAllProblems = async (req, res) => {
    try {
        const problems = await problemService.getAllProblems();
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemById = async (req, res) => {
    try {
        const problem = await problemService.getProblemById(req.params.id);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

