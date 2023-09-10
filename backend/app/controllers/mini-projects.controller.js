const service = require('../services/mini-project.service');
const projectScorerService = require('../services/project-scorer.service');

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

exports.updateMiniProjectSubmission = async (req, res) => {
    try {
        const mini_project_submission = await service.updateMiniProjectSubmission(req.params.id, req.params.userid, req.body);
        service.getMiniProjectById(req.params.id)
        .then((mini_project) => {
            projectScorerService.getScore(req.params.id, mini_project_submission.submitted_code, mini_project.test_code, mini_project.max_score)
                .then((score) => {
                    console.log(score);
                    if(score)service.insertUserScore(req.params.id, req.params.userid, score);
                })
                .catch((err) => {
                    throw err;
                })
        })
        .catch((err) => { console.log(err);})
        res.status(200).json(mini_project_submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteMiniProject = async (req, res) => {
    try {
        const mini_project = await service.deleteMiniProject(req.params.id);
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
        service.getMiniProjectById(req.params.id)
        .then((mini_project) => {
            //console.log("the submitted mini project :",mini_project);
            projectScorerService.getScore(req.params.id, mini_project_submission.submitted_code, mini_project.test_code, mini_project.max_score)
                .then((score) => {
                    //console.log(req.params.id, req.score);
                    service.insertUserScore(req.params.id, req.body.userid, score);
                })
                .catch((err) => {
                    throw err;
                })
        })
        .catch((err) => { console.log(err);})
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

exports.insertUserScore = async (req, res) => {
    try {
        const user_score = await service.insertUserScore(req.params.id, req.params.userid, req.body.score);
        res.status(200).json(user_score);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getUserScore = async (req, res) => {
    try {
        const user_score = await service.getUserScore(req.params.id, req.params.userid);
        res.status(200).json(user_score);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateUserScore = async (req, res) => {
    try {
        const user_score = await service.updateUserScore(req.params.id, req.params.userid, req.body.score);
        res.status(200).json(user_score);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllMiniProjectSubmissionByUserId = async (req, res) => {
    try {
        const mini_project_submissions = await service.getAllMiniProjectSubmissionByUserId(req.params.userid);
        res.status(200).json(mini_project_submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}