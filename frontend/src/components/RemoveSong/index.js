import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './RemoveSong.css';
import { removeSong } from '../../store/songs'


function RemoveSong({ song, setShowModal }) {

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {

        e.preventDefault();
        await dispatch(removeSong(song))
        setShowModal(false);
    };



    return (
        <div className='deleteModalContainer'>
            <form onSubmit={handleSubmit}>
                <label className='areYouSure'>
                    Are you sure you want to delete this?
                </label>

                <button type="submit"  className='deleteUpload' >{'   '}Delete Upload</button>
            </form >
        </div>
    );
}

export default RemoveSong;
