import React, { useEffect } from 'react';
import './Preview.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCameraImage, resetCameraImage } from './features/features/cameraSlice';
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import { v4 as uuid } from 'uuid';
import { db, storage } from './firebase';
import firebase from 'firebase';


function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory();
    const dispatch = useDispatch()

    const closePreview = () => {
        dispatch(resetCameraImage());
        history.replace("/")
    }

    const sendPost = () => {
       const id = uuid();
       const uploadTask = storage.ref(`posts/${id}`)
       .putString(cameraImage, 'data_url')

       uploadTask.on('state_changed', null, (error) => {
           console.log(error)
       }, () => {
           storage.ref('posts').child(id).getDownloadURL()
           .then((url) => {
               db.collection('posts').add({
                   imageUrl: url,
                   username: 'Ben',
                   read: false,
                //    profilePic,
                   timestamp: firebase.firestore.FieldValue.serverTimestamp()
               });
               history.replace('/chats');
           })
       })
    }

    useEffect(()=> {
        if(!cameraImage) {
            history.replace("/")
        }
    }, [cameraImage, history])

    return <div className="preview">

        <CloseIcon onClick={closePreview} className="preview__close"/>
        <div className="preview_toolbarRight">
            <TextFieldsIcon />
            <CreateIcon />
            <NoteIcon />
            <MusicNoteIcon />
            <AttachFileIcon />
            <CropIcon />
            <TimerIcon />
        </div>
        <img src={cameraImage} alt="" />
        <div onClick={sendPost}className="preview_footer">
            <h2>Send Now</h2>
            <SendIcon className="preview_sendIcon" />
        </div>
    </div>
}

export default Preview;