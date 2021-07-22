export const LOAD_SONG = "song/LOAD_ALBUM";
export const REMOVE_SONG = "song/REMOVE_ITEM";
export const ADD_SONG = "song/ADD_ALBUM";

const load = (songs) => ({
    type: LOAD_SONG,
    songs
  });


  const add = (song) => ({
    type: ADD_SONG,
    song
  });

  const remove = (song) => ({
    type: REMOVE_SONG,
    song,
  });

  export const getSongs = () => async (dispatch) => {
    const res = await fetch('/api/songs/home');
    if (res.ok) {
      const songs = await res.json();
      dispatch(load(songs));
    }
  };


  const initialState = {};

  const songsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_SONG: {
        return {
          ...state,
          ...Object.fromEntries(action.songs.map((song) => [song.id, song]))
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

      default:
        return state;
    }
  };

  export default songsReducer;
