const service = require('../services/mini-project.service');

exports.getAllMiniProjects = async (req, res) => {
    try {
        const mini_projects = await service.getAllMiniProjects();
        res.status(200).json(mini_projects);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createMiniProject = async (req, res) => {
    try {
        const mini_project = await service.createMiniProject(req.body);
        res.status(200).json(mini_project);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getMiniProjectById = async (req, res) => {
    try {
        const mini_project = await service.getMiniProjectById(req.params.id);
        res.status(200).json(mini_project);
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.updateMiniProject = async (req, res) => {
    try {
        const mini_project = await service.updateMiniProject(req.params.id, req.body);
        res.status(200).json(mini_project);
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.getAllMiniProjectSubmissions = async (req, res) => {
    try {
        const mini_project_submissions = await service.getAllMiniProjectSubmissions(req.params.id);
        res.status(200).json(mini_project_submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createMiniProjectSubmission = async (req, res) => {
    try {
        const mini_project_submission = await service.createMiniProjectSubmission(req.params.id, req.body);
        res.status(200).json(mini_project_submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getMiniProjectSubmissionByUserId = async (req, res) => {
    try {
        const mini_project_submission = await service.getMiniProjectSubmissionByUserId(req.params.id, req.params.userid);
        res.status(200).json(mini_project_submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getMiniProjectStanding = async (req, res) => {
    try {
        const mini_project_standing = await service.getMiniProjectStanding(req.params.id);
        res.status(200).json(mini_project_standing);
    } catch (error) {
        res.status(500).json(error);
    }
}