import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import './SinglePost.css'
import { removeSong, getSongs } from '../../store/songs'


const SinglePost = () => {


    const dispatch = useDispatch();
    const { id } = useParams();

    const song = useSelector((state) => Object.values(state.songs));


    useEffect(() => {
        dispatch(getSongs(song))
    }, [dispatch])

    useEffect(() => {
        dispatch(removeSong(song))
    }, [dispatch])

    return (
        <div className="singleContainer">
            <div>

            </div>
           {/* {song.map((song) => { song.id == id ? <div key={song}>{song.title}</div> : null; }
            )
            }  */}
        </div>
    )
}
export default SinglePost
