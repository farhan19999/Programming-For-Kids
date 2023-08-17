var Dropbox = require('dropbox').Dropbox;
fs = require('fs').promises;

var dbx = new Dropbox({ accessToken: 'sl.BkTZBy_-QaHRGIOsoehsb7jz9foV9w5oO7Y2tIwyeoWcDAO3MgKCGSFRDhFjoAMtqYjYEd45702cG-I8YmZCRtR9BDp31UeZSC8x6UAK0gYB1EBimQiEj_oNcVcMuafVqsigabofgMlJ5XNTQWKIO4A' });


// dbx.filesListFolder({path: ''})
//   .then(function(response) {
//     console.log(response.result.entries);
//   })
//   .catch(function(error) {
//     console.log(error.error);
//   });

//   dbx.usersGetCurrentAccount()
//   .then(function(response) {
//     console.log(response.result);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });


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

// dbx.filesDownload({ path: '/submission' })
//   .then((data) => {
//     fs.writeFile(data.result.name, data.result.fileBinary, 'binary', (err) => {
//       if (err) { throw err; }
//       console.log(`File: ${data.result.name} saved.`);
//     });
//     console.log(data.result);
//   })
//   .catch((err) => {
//     console.log(err.error.error);
//     throw err;
//   });

exports.uploadFile = async (local_file_path, remote_file_path) => {

  await fs.readFile(local_file_path, (err, contents) => {
    if (err) {
      console.log('Error: ', err);
      throw err;
    }
    dbx.filesUpload({ path: remote_file_path, contents })
      .then((response) => {
        console.log(response.result);

      })
      .catch((uploadErr) => {
        console.log(uploadErr.error);
        throw uploadErr;
      });
  })
  return 'success'
}

exports.downloadFile = async (remote_file_path, local_file_path) => {
  try {
    const data = await dbx.filesDownload({ path: remote_file_path });
    await fs.writeFile(local_file_path, data.result.fileBinary, 'binary');
    return 'success';
  }catch(err){
    console.log(err.error.error);
    throw err;
  }
};


