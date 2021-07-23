import React, { useState } from "react";
import { useSelector } from 'react-redux'
import EditSong from './EditSong';
import { Modal } from '../../context/Modal';
import './EditSong.css'



function EditSongModal({song}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='editTitle' onClick={() => setShowModal(true)}>Edit Title</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong setShowModal={setShowModal}song={song} />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;
