var Dropbox = require('dropbox').Dropbox;
fs = require('fs')

var dbx = new Dropbox({ accessToken: 'sl.BkFwy6RaOtMuyys3_0YBo9GqJwc5vfLdl1U3BOAdu5aLoAn6rc2V1vvd35G0E7lRr9dkO69nIdIH_2ILf5VowvFA5QdqIG6_Q95ea0pUSKvlAm2oHn3E9bYqF6agHCWRokCntPgYSY8NHzr6mX7AxiI' });


dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response.result.entries);
  })
  .catch(function(error) {
    console.log(error.error);
  });

  dbx.usersGetCurrentAccount()
  .then(function(response) {
    console.log(response.result);
  })
  .catch(function(error) {
    console.error(error);
  });


// fs.readFile('./backend/app/files/test.txt', (err, contents) => {
//     if (err) {
//       console.log('Error: ', err);
//     }

//     dbx.filesUpload({ path: '/submission/test.txt', contents })
//       .then((response) => {
//         console.log(response.result);
//       })
//       .catch((uploadErr) => {
//         console.log(uploadErr.error);
//       });
//   });

  dbx.filesDownload({ path: '/test.txt' })
    .then((data) => {
      fs.writeFile(data.result.name, data.result.fileBinary, 'binary', (err) => {
        if (err) { throw err; }
        console.log(`File: ${data.result.name} saved.`);
      });
        console.log(data.result);
    })
    .catch((err) => {
        console.log(err.error.error);
        throw err;
    });

exports.uploadFile = async (file) => {
    try {
        const file = await dbx.filesUpload({ path: '/submission/test.txt', contents })
        return file;
    } catch (error) {
        throw Error(error)
    }
}

