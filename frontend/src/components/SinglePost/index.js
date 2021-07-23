import React, { useEffect } from 'react';
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
                    {<div>Hola</div>}
                    
        </div>

    )
}


export default SinglePost
