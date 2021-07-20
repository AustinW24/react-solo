export const LOAD_SONG = "song/LOAD_ALBUM";
export const REMOVE_SONG = "song/REMOVE_ITEM";
export const UPDATE_SONG = "song/UPDATE_SONG";
export const ADD_SONG = "song/ADD_ALBUM";

const load = (songId) => ({
    type: LOAD_SONG,
    songId
  });

  const update = (songId) => ({
    type: UPDATE_SONG,
    songId
  });

  const add = (songId) => ({
    type: ADD_SONG,
    songId
  });

  const remove = (songId) => ({
    type: REMOVE_SONG,
    songId,
  });

  export const fetchSong = (id) => async (dispatch) => {
    const res = await fetch(`/api/songs/${id}`);
    if (res.ok) {
      const song = await res.json();
      dispatch(load(id));
    }
  };


  const initialState = {};

  const songsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SONG: {
        const newSong = {};
        action.albums.forEach((song) => {
          newSong[song.id] = song;
        });
        return {
          ...state,
          ...newSong,
        };
      }
      case REMOVE_SONG: {
        const newState = { ...state };
        delete newState[action.songId];
        return newState;
      }
      case ADD_SONG:
        const newState = { ...state };
            newState = newState[action.songId]
      case UPDATE_SONG: {
        return {
          ...state,
          [action.song.id]: action.song,
        };
      }
      default:
        return state;
    }
  };

  export default songsReducer;
