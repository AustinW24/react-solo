import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import './UploadPage.css'


const UploadPage = () => {

const[title , setTitle] = useState('')
const[url , setUrl] = useState('')
const[duration , setDuration] = useState('')

const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    const newSong = {
        title: title,
        url: url,
        duration: duration
    }
};
// useEffect(() => {
//     dispatch(addSong(newSong))
// }, [dispatch])

    return (
        <div className="uploadContainer">
            <div className='postContainer'>
                <form onSubmit={handleSubmit}>
                    <h1>HELLO</h1>
                </form>
            </div>

        </div>

    )
}


export default UploadPage
