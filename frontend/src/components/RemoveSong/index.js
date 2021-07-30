
import { useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router';
import { csrfFetch } from '../.././store/csrf';
import './RemoveSong.css';
import { removeSong } from '../../store/songs'


const RemoveSong = async ({ song, setShowModal }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const songId = useParams().id;


    const res = await csrfFetch(`/api/home`, {
        method: 'DELETE',
    });

    if(res.ok) {
        history.push('/listings');
        dispatch(removeSong(songId));
        setShowModal(false);
    };



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
