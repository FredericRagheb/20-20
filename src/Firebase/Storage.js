import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase.config";
export const UploadFile = (blobFile, fileName) => {
    if (!blobFile) return;
    const sotrageRef = ref(storage, `Test1/${fileName}`); //LINE A
    const uploadTask = uploadBytesResumable(sotrageRef, blobFile); //LINE B
uploadTask.on(
        "state_changed", null ,
        (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { //LINE C
                console.log("File available at", downloadURL);
                return downloadURL
            });
}
    );
}