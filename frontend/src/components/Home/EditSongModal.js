import React, { useState } from "react";
import EditSong from './EditSong';
import { Modal } from '../../context/Modal';
import './EditSong.css'


function EditSongModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a onClick={() => setShowModal(true)}>Edit Title</a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong  />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;
