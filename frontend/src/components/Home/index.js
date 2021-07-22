import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import './Home.css'
import { getSongs } from '../../store/songs'
import ProfileButton from '../Navigation/ProfileButton'



function Home() {

    const dispatch = useDispatch();

    const songs = useSelector((state) => Object.values(state.songs))

    const sessionUser = useSelector(state => state.session.user);

    const sessionLinks = (
        <ProfileButton user={sessionUser} />
    )

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    return (
        <div className='homeContainer'>
            <NavLink className='homebutton' exact to='/'>home</NavLink>
            <div className='singleUpload'>
                {songs.map((song) =>
                    <div>
                        <img src={song.url} className='eachPhoto'></img>
                        <p className='songTitle'>{song.title}</p>
                        <p className='duration'>{song.duration}</p>
                    </div>
                )}
            </div>


        </div>

    )
}

export default Home
