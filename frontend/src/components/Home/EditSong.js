import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import './EditSong.css';
import EditSongModal from './EditSongModal'
import {editSong} from '../../store/songs'


function EditSong() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState('');
  const sessionUser = useSelector(state => state.session.user);

const reset = () => {
  setTitle('');
  setUrl('');
  setDuration('')
}


  let titleLinks;
  if (sessionUser) {
      titleLinks = (
      <>
        <EditSongModal />
      </>
    );
  }


    const handleSubmit = (e) => {
      e.preventDefault();
      const newSong = {
        title: title,
        url,
        duration
      }

      dispatch(editSong(newSong))
      reset()
    };



    return (
      <div className='songModalContainer'>
        <form onSubmit={handleSubmit}>
          <label>
            Track Title: {' '}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <a type="submit" className='confirm' href='/home' onClick={(e) => setTitle(e.target.value)}>{' '}Confirm Change</a>
        </form >
      </div>
    );
  }

  export default EditSong;
