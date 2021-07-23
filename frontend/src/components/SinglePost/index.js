import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './SinglePost.css'
import { removeSong, getSong, editSong } from '../../store/songs'


const SinglePost = () => {


const dispatch = useDispatch();

const song = useSelector((state) => Object.values(state.songs))

useEffect(() => {
    dispatch(removeSong(song))
}, [dispatch])

    return (
        <div className="singleContainer">
                    <h1>HELLO</h1>
        </div>

    )
}


export default SinglePost
