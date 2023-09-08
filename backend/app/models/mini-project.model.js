
const {pool} = require('../config/db.config')
// const pg = require('pg')
// const pool = new pg.Pool(pool_config)

const getAllMiniProjects = async () => {
    try {
        const mini_projects = await pool.query('SELECT * FROM pfk.mini_project');
        
        return {'mini_projects':mini_projects.rows};
    } catch (error) {
        throw error;
    }
}

const createMiniProject = async (mini_project) => {
    try {
        const maxid = await pool.query('SELECT MAX(projectid) FROM pfk.mini_project');
        const new_mini_project = await pool.query('INSERT INTO pfk.mini_project (projectid, title, project_details, starting_code, starting_time, duration, test_code, max_score) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [maxid.rows[0].max+1, mini_project.title, mini_project.project_details, mini_project.starting_code, mini_project.starting_time, mini_project.duration, mini_project.test_code, mini_project.max_score]);
        return new_mini_project.rows[0];
    }catch (error) {
        throw error;
    }
}

const getMiniProjectById = async (id) => {
    try {
        const mini_project = await pool.query('SELECT * FROM pfk.mini_project WHERE projectid = $1', [id]);
        return mini_project.rows[0];
    } catch (error) {
        throw error;
    }
}

const updateMiniProject = async (id, mini_project) => {
    try {
        const updated_mini_project = await pool.query('UPDATE pfk.mini_project SET title = $1, project_details = $2, starting_code = $3, starting_time = $4, duration = $5, test_code = $6, max_score = $7 WHERE projectid = $8 RETURNING *', [mini_project.title, mini_project.project_details, mini_project.starting_code, mini_project.starting_time, mini_project.duration, mini_project.test_code, mini_project.max_score, id]);
        return updated_mini_project.rows[0];
    } catch (error) {
        throw error;
    }
}

const deleteMiniProject = async (id) => {
    try {
        const deleted_mini_project = await pool.query('DELETE FROM pfk.mini_project WHERE projectid = $1 RETURNING *', [id]);
        return deleted_mini_project.rows[0];
    } catch (error) {
        throw error;
    }
}


const getAllMiniProjectSubmissions = async (id) => {
    try {
        const mini_project_submissions = await pool.query('SELECT * FROM pfk.project_submission_history WHERE projectid = $1', [id]);
        return {'project_submissions':mini_project_submissions.rows};
    } catch (error) {
        throw error;
    }
}

const createMiniProjectSubmission = async (id, mini_project_submission) => {
    try{
        const maxid = await pool.query('SELECT MAX(id) FROM pfk.mini_project_submission');
        const new_mini_project_submission = await pool.query('INSERT INTO pfk.project_submission_history (projsubmissionid, projectid, userid, submitted_time, submitted_code) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxid.rows[0].max+1, id, mini_project_submission.userid, mini_project_submission.submitted_time, mini_project_submission.submitted_code]);
        return new_mini_project_submission.rows[0];
    }catch (error) {
        throw error;
    }
}

const getMiniProjectSubmissionByUserId = async (id, userid) => {
    try {
        const mini_project_submission = await pool.query('SELECT * FROM pfk.project_submission_history WHERE projectid = $1 AND userid = $2', [id, userid]);
        return mini_project_submission.rows[0];
    } catch (error) {
        throw error;
    }
}

const updateMiniProjectSubmission = async (id, userid, mini_project_submission) => {
    try {
        const updated_mini_project_submission = await pool.query('UPDATE pfk.project_submission_history SET submitted_time = $1, submitted_code = $2 WHERE projectid = $3 AND userid = $4 RETURNING *', [mini_project_submission.submitted_time, mini_project_submission.submitted_code, id, userid]);
        return updated_mini_project_submission.rows[0];
    } catch (error) {
        throw error;
    }
}

const getMiniProjectStanding = async (id) => {
    try {
        const mini_project_standing = await pool.query('SELECT u.username, psh.score FROM pfk.project_submission_history as psh inner join pfk.users as u WHERE psh.projectid = $1 ORDER BY score ASC', [id]);
        return mini_project_standing.rows;
    } catch (error) {
        throw error;
    }
}

const insertUserScore = async (id, userid, score) => {
    try {
        const result = await pool.query('Update pfk.project_submission_history SET score = $1 WHERE projectid = $2 AND userid = $3 RETURNING *', [score, id, userid]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

const getUserScore = async (id, userid) => {
    try {
        const result = await pool.query('SELECT score FROM pfk.project_submission_history WHERE projectid = $1 AND userid = $2', [id, userid]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}


module.exports = {getAllMiniProjects, createMiniProject, getMiniProjectById, updateMiniProject, deleteMiniProject,getAllMiniProjectSubmissions, createMiniProjectSubmission, getMiniProjectSubmissionByUserId, updateMiniProjectSubmission,getMiniProjectStanding, insertUserScore, getUserScore  }