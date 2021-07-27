import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import ProfileButton from '../Navigation/ProfileButton'
import './Home.css'
import { getSongs } from '../../store/songs'
import EditSongModal from './EditSongModal'
import RemoveSongModal from '../RemoveSong/RemoveSongModal'
import LoginFormModal from '../LoginFormModal'
import soundwave from "./soundwave.PNG"

function Home() {

    const dispatch = useDispatch();
    const songs = useSelector((state) => Object.values(state.songs))
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <LoginFormModal />
          <NavLink className='signup' to="/signup"><button className='createAccount'>Create account</button></NavLink>
        </>
      );
    }


    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])



    return (

        <div className='homeContainer'>
            {songs.map((song) =>
                <div className='imgText' key={song.id}>
                    <img src={song.url} className='eachPhoto' alt='song-art'></img>
                    <div className='songText'>
                    <p className='titleDuration'>{song.title} </p>
                        <EditSongModal  song={song} />
                        <img src={soundwave}></img>
                        <RemoveSongModal song={song} />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Home
