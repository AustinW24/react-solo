import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import './EditSong.css';
import EditSongModal from './EditSongModal'
import {editSong} from '../../store/songs'

function EditSong({song, setShowModal}) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const sessionUser = useSelector(state => state.session.user);


  let titleLinks;
  if (sessionUser) {
      titleLinks = (
      <>
        <EditSongModal />
      </>
    );
  }

    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log('====================', song)
      await dispatch(editSong(song))
      setShowModal(false);
    };

    return (
      <div className='songModalContainer'>
        <form onSubmit={handleSubmit}>
          <label className='trackTitle'>
            Track Title: {' '}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <button type="submit" className='confirm' >{'   '}Confirm Change</button>
        </form >
      </div>
    );
  }

  export default EditSong;
