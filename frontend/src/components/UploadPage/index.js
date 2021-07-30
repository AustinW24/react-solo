import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { addSong } from '../../store/songs'
import './UploadPage.css'


const UploadPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [userId, setUserId] = useState('')
    // const [albumId, setAlbumId] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    // const [duration, setDuration] = useState('')

    const updateUserId = (e) => setUserId(e.target.value)
    // const updateAlbumId = (e) => setAlbumId(e.target.value);
    const updateTitle = (e) => setTitle(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value);
    // const updateDuration = (e) => setDuration(e.target.value);



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            title,
            url,
        }
        const song = await dispatch(addSong(payload))
        if (song) {
            history.push('/home')
        }
    };


    return (
        <div class='uploadPageContainer'>
            <div className="uploadContainer">
                <div className='postContainer'>
                    <form onSubmit={handleSubmit}>
                        <label>Username </label>
                        <input onChange={updateUserId} placeholder='User Id..' className='userId' type='text'></input>
                        <label>Track Title </label>
                        <input onChange={updateTitle} placeholder='Name of track..' className='trackTitleUpload' type='text'></input>
                        <label>Cover Art </label>
                        <input onChange={updateUrl} placeholder='URL image..' className='coverArt' type='text'></input>
                        <label className='dragAndDrop'>Drag and drop your tracks & albums here </label>
                        <button className='uploadButton'>or choose files to upload</button>
                        <button type='submit' className='uploadSubmitButton'>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}


export default UploadPage
