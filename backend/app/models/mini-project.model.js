
const {pool} = require('../config/db.config')
// const pg = require('pg')
// const pool = new pg.Pool(pool_config)

const getAllMiniProjects = async () => {
    try {
        const mini_projects = await pool.query('SELECT * FROM pfk.mini_project');
        
        return {'mini_projects':mini_projects.rows};
    } catch (error) {
        throw new Error(error);
    }
}

const createMiniProject = async (mini_project) => {
    try {
        const maxid = await pool.query('SELECT MAX(projectid) FROM pfk.mini_project');
        const new_mini_project = await pool.query('INSERT INTO pfk.mini_project (projectid, title, project_details, starting_code, starting_time) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxid.rows[0].max+1, mini_project.title, mini_project.project_details, mini_project.starting_code, mini_project.starting_time]);
        return new_mini_project.rows[0];
    }catch (error) {
        throw new Error(error);
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
        const updated_mini_project = await pool.query('UPDATE pfk.mini_project SET title = $1, project_details = $2, starting_code = $3, starting_time = $4 WHERE projectid = $5 RETURNING *', [mini_project.title, mini_project.project_details, mini_project.starting_code, mini_project.starting_time, id]);
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
        throw new Error(error);
    }
}

const getMiniProjectSubmissionByUserId = async (id, userid) => {
    try {
        const mini_project_submission = await pool.query('SELECT * FROM pfk.project_submission_history WHERE projectid = $1 AND userid = $2', [id, userid]);
        return mini_project_submission.rows[0];
    } catch (error) {
        throw new Error(error);
    }
}

const getMiniProjectStanding = async (id) => {
    try {
        const mini_project_standing = await pool.query('SELECT u.username, psh.score FROM pfk.project_submission_history as psh inner join pfk.users as u WHERE psh.projectid = $1 ORDER BY score ASC', [id]);
        return mini_project_standing.rows;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {getAllMiniProjects, createMiniProject, getMiniProjectById, updateMiniProject, deleteMiniProject,getAllMiniProjectSubmissions, createMiniProjectSubmission, getMiniProjectSubmissionByUserId, getMiniProjectStanding  }