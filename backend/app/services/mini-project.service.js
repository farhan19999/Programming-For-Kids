const miniprojectModel = require('../models/mini-project.model');

exports.getAllMiniProjects = async () => {
    try {
        const mini_projects = await miniprojectModel.getAllMiniProjects();
        return mini_projects;
    } catch (error) {
        throw new Error(error);
    }
}

exports.createMiniProject = async (mini_project) => {
    try {
        const new_mini_project = await miniprojectModel.createMiniProject(mini_project);
        return new_mini_project;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getMiniProjectById = async (id) => {
    try {
        const mini_project = await miniprojectModel.getMiniProjectById(id);
        return mini_project;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateMiniProject = async (id, mini_project) => {
    try {
        const updated_mini_project = await miniprojectModel.updateMiniProject(id, mini_project);
        return updated_mini_project;
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteMiniProject = async (id) => {
    try {
        const deleted_mini_project = await miniprojectModel.deleteMiniProject(id);
        return deleted_mini_project;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllMiniProjectSubmissions = async (id) => {
    try {
        const mini_project_submissions = await miniprojectModel.getAllMiniProjectSubmissions(id);
        return mini_project_submissions;
    } catch (error) {
        throw new Error(error);
    }
}

exports.createMiniProjectSubmission = async (id, mini_project_submission) => {
    try {
        const new_mini_project_submission = await miniprojectModel.createMiniProjectSubmission(id, mini_project_submission);
        return new_mini_project_submission;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getMiniProjectSubmissionByUserId = async (id, userid) => {
    try {
        const mini_project_submission = await miniprojectModel.getMiniProjectSubmissionByUserId(id, userid);
        return mini_project_submission;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getMiniProjectStanding = async (id) => {
    try {
        const mini_project_standing = await miniprojectModel.getMiniProjectStanding(id);
        return mini_project_standing;
    } catch (error) {
        throw new Error(error);
    }
}