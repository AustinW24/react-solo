import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSong.css';

import {editSong} from '../../store/songs'

function EditSong({song, setShowModal}) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      song.title = title

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
