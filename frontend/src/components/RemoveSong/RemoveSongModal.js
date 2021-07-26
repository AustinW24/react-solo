import React, { useState } from "react";
import RemoveSong from './index';
import { Modal } from '../../context/Modal';
import './RemoveSong.css'



function RemoveSongModal({song}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <input className='bin' type='image'  onClick={() => setShowModal(true)} src='https://previews.123rf.com/images/esfirse/esfirse1812/esfirse181200156/115299132-cross-sign-red-x-icon-isolated-on-white-background-circle-symbol.jpg'></input>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RemoveSong setShowModal={setShowModal}song={song} />
                </Modal>
            )}
        </>
    );
}

export default RemoveSongModal;
