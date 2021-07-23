import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './Home.css'
import { getSongs } from '../../store/songs'
import ProfileButton from '../Navigation/ProfileButton'
import EditSongModal from './EditSongModal'


function Home() {

    const dispatch = useDispatch();

    const songs = useSelector((state) => Object.values(state.songs))
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getSongs(songs))
        console.log('IT WORKS')
    }, [dispatch])



    return (

        <div className='homeContainer'>
            <a className='upload' href='/upload'><button>Upload</button></a>
            {songs.map((song) =>
                <div className='imgText' key={song.id}>
                    <img src={song.url} className='eachPhoto'></img>
                    <div className='songText'>
                    <p className='titleDuration'>{song.title} {song.duration.slice(0,1) + ':' + song.duration.slice(1,3)}</p>
                        <EditSongModal songs={songs} />
                    </div>

                </div>

            )}
        </div>
    )
}
export default Home
