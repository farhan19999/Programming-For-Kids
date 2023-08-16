const {exec} = require('child_process');
const fs = require('fs');


const codeRunner = (code_file_path, input_file_path, output_file_path) => {
    exec('gcc -o ../files/temp ../files/temp.c & \"../files/temp.exe\"', {timeout : 1000}, (err, stdout, stderr) => {
        if (err) {
            if(err.killed) {
                console.log('TLE');
                return 'TLE';
            }
            else{
                console.log('RE');
                return 'RTE';
            }
        }
        fs.readFile('../files/test.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            if(data === stdout) {
                console.log('Accepted');
            } else {             
                console.log('WA');
            }
        });
    });
}

codeRunner();