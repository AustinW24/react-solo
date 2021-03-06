import React, { useState } from "react";
import EditSong from './EditSong';
import { Modal } from '../../context/Modal';
import './EditSong.css'



function EditSongModal({song}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='editTitle' onClick={() => setShowModal(true)}>Edit Song</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong setShowModal={setShowModal}song={song} />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;
