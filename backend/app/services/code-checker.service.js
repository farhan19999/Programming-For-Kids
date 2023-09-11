const { downloadFileFromFirebase } = require("./firebase.service");
const { getTestCasesByProblemId } = require("../models/problem.model");
const util = require("util");
const { versions } = require("process");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs").promises;

const prepareCodeFile = async (code_file_path, file_name) => {
  try {
    const result = await downloadFileFromFirebase(
      `${code_file_path}/${file_name}`,
      `./app/files/${file_name}`
    );
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const load_test_cases = async (
  input_file,
  output_file,
  problemid,
  testcaseid
) => {
  try {
    const result = await downloadFileFromFirebase(
      `/problems/${problemid}/testcases/${input_file}`,
      `./app/files/${input_file}`
    );
    const result2 = await downloadFileFromFirebase(
      `/problems/${problemid}/testcases/${output_file}`,
      `./app/files/${output_file}`
    );
    //console.log('input and ouput file loaded');
  } catch (err) {
    console.log(err);
    throw err;
  }
};
/**
 *
 * @param {*} code_file_path
 * @param {*} file_name
 * @param {*} problemid
 * @param {*} time_limit
 * @returns
 */
const cCodeRunner = async (
  code_file_path,
  file_name,
  problemid,
  time_limit
) => {
  let submission_result = {
    verdict: "",
    details: "",
  };
  const testcases = [];
  //first download the code file and testcases file name
  try {
    await prepareCodeFile(code_file_path, file_name);
    testcases = await getTestCasesByProblemId(problemid);
  } catch (error) {
    console.log(error);
    throw error;
  }
  //then compile the code file
  try {
    const { stdout, stderr } = await exec(
      `gcc -o ./app/files/a ./app/files/${file_name}`
    );
  } catch (err) {
    submission_result.verdict = "CE";
    submission_result.details += `Compilation Error\n`;
    console.log(err);
    await fs.unlink(`./app/files/${file_name}`);
    await fs.unlink(`./app/files/a.exe`);
  }

  for (let i = 0; i < testcases.length; i++) {
    let testcase = testcases[i];
    try {
      await load_test_cases(
        testcase.input_file,
        testcase.output_file,
        problemid,
        testcase.testcaseid
      );
    } catch (err) {
      console.log(err);
      for (const file of await fs.readdir('./app/files')) {
        await fs.unlink('/app/files/' + file);
      }
      throw err;
    }

    try {
      const { pid, stdout, stderr } = await exec(`"./app/files/a.exe" < ./app/files/${testcase.input_file}`,{ timeout: time_limit });
      const data = await fs.readFile(`./app/files/${testcase.output_file}`,"utf8");
      if (data === stdout) {
        console.log(`Passed on ${testcase.input_file}`);
        if ( submission_result.verdict == "ACCEPTED" || submission_result.verdict == "")submission_result.verdict = "ACCEPTED";
        submission_result.details += `Testcase ${i + 1} passed\n`;
      } else {
        submission_result.verdict = "WA";
        submission_result.details += `Testcase ${i + 1} failed : Wrong Answer\n`;
      }
      submission_result.details += `Expected output : ${data}\n`;
      submission_result.details += `Output : ${stdout}\n`;
      await fs.unlink(`./app/files/${testcase.input_file}`);
      await fs.unlink(`./app/files/${testcase.output_file}`);
    } catch (err) {
      if (err.killed === true) {
        process.killDeep(pid);
        submission_result.verdict = "TLE";
        submission_result.details += `Testcase ${i + 1} failed : Time limit Exceeded\n`;
        submission_result.details += `Expected output : ${stdout}\n`;
        submission_result.details += `Output : \n`;
      } else {
        submission_result.verdict = "RTE";
        submission_result.details += `Testcase ${
          i + 1
        } failed : RunTime Error\n`;
        submission_result.details += `Expected output : ${stdout}\n`;
        submission_result.details += `Output : \n`;
      }
      console.log(err);
      await fs.unlink(`./app/files/${testcase.input_file}`);
      await fs.unlink(`./app/files/${testcase.output_file}`);
    }
  }

  await fs.unlink(`./app/files/${file_name}`);
  await fs.unlink(`./app/files/a.exe`);
  console.log(submission_result);
  return submission_result;
};

module.exports = { cCodeRunner };
