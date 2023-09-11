const { downloadFileFromFirebase } = require("./firebase.service");
const { getTestCasesByProblemId } = require("../models/problem.model");
const util = require("util");
const { versions } = require("process");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs").promises;


const prepareCodeFile = async (projectid, file_name) => {
    try {
        await downloadFileFromFirebase(
        `/projects/submissions/${projectid}/${file_name}`,
        `./app/files/${file_name}`
        );
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const prepareTesterCode = async (file_name) => {
    try {
        const result = await downloadFileFromFirebase(
        `/projects/tester/${file_name}`,
        `./app/files/${file_name}`
        );
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


exports.getScore = async (projectid,code_file_name, tester_file_name, max_score) => {
    let score = 0;
    //console.log(code_file_name, tester_file_name);
    if(!code_file_name || !tester_file_name) return score;
    try {
        await prepareCodeFile(projectid, code_file_name);
        await prepareTesterCode( tester_file_name);
        try{
            const { stdout, stderr } = await exec(`python3 ./app/files/${tester_file_name} ./app/files/${code_file_name}`);
            score = Math.round(parseInt(stdout)*max_score/100);

        }
        catch(err){
            console.log(err);
            await fs.unlink(`./app/files/${code_file_name}`);
            await fs.unlink(`./app/files/${tester_file_name}`);
            throw err;
        }
    } catch (err) {
        console.log(err);
        await fs.unlink(`./app/files/${code_file_name}`);
        await fs.unlink(`./app/files/${tester_file_name}`);
    }
    await fs.unlink(`./app/files/${code_file_name}`);
    await fs.unlink(`./app/files/${tester_file_name}`);
    return score;
}

