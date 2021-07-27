import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSong.css';

import { editSong } from '../../store/songs'

function EditSong({ song, setShowModal }) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const [inputColor, setInputColor] = useState('black');

  const onChange = (e) => {
    setInputColor((inputColor === 'black' ? '#FFFFFF' : '#FFFFFF'));
 }


  const handleSubmit = async (e) => {
    e.preventDefault();
    song.title = title;
    song.url = url;

    await dispatch(editSong(song))
    setShowModal(false);
  };

  return (
    <div className='songModalContainer'>
      <form onSubmit={handleSubmit}>
        <label className='trackTitle'>
          Track Title: {' '}
          <input
            placeholder='Title name..'
            type="text"
            value={title}
            onClick={onChange}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className='trackUrl'>
          Track Cover: {' '}
          <input
            placeholder='Cover URL..'
            type="text"
            value={url}
            onClick={onChange}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit" className='confirm' >{'   '}Confirm Change</button>
      </form >
    </div>
  );
}

export default EditSong;
