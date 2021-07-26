import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import './Home.css'
import { getSongs } from '../../store/songs'
import EditSongModal from './EditSongModal'
import RemoveSongModal from '../RemoveSong/RemoveSongModal'
import soundwave from "./soundwave.PNG"

function Home() {

    const dispatch = useDispatch();

    const songs = useSelector((state) => Object.values(state.songs))

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
