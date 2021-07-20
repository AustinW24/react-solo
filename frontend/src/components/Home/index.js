import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './Home.css'

function Home() {

    // const songs = useSelector(state => {
    //     return state.songs.list.map(songId => state.songs[songId]);
    //   });

    return (
        <div className='homeContainer'>
            <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
            <script>
                {SC.initialize({
                    client_id: 'YOUR_CLIENT_ID',
                redirect_uri: 'https://example.com/callback'
  })};
            </script>
            <div className='latestDiv'>
                <img className='recordImg' src='https://s3.cointelegraph.com/storage/uploads/view/12aaeaf78ca47c94da141ef52c84e485.png'></img>
                <h1 className='latestText'>Latest from people you follow</h1>
            </div>
            <div className='uploadContainer'></div>
        </div>

    )
}

export default Home
