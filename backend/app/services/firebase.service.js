const { app } = require('../config/firebase.config.js');
const { getStorage, uploadBytes, ref, getStream } = require('firebase/storage');
const fs = require('fs').promises;
const storage = getStorage(app);

const uploadFileToFirebase = async (local_file_path, remote_file_path, file_name) => {
    try {
        const data = await fs.readFile(local_file_path);
        const storageRef = ref(storage, remote_file_path);
        const uploadTask = await uploadBytes(storageRef, data);
        //console.log(uploadTask);
        return uploadTask;
    } catch (err) {
        console.log(err);
    }

    
}
const downloadFileFromFirebase = async (remote_file_path, local_file_path) => {
    try {
        const storageRef = ref(storage, remote_file_path);
        const data =  getStream(storageRef);
        try{
            await fs.access(local_file_path)
        }
        catch(err){
            await fs.mkdir(local_file_path.substring(0, local_file_path.lastIndexOf('/')), { recursive: true });
        }
        const success = await fs.writeFile(local_file_path, data);
        return success;
    } catch (err) {
        console.log(err);
    }

    
}


module.exports = { uploadFileToFirebase, downloadFileFromFirebase }
