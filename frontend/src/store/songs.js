import { csrfFetch } from './csrf.js'
export const LOAD_SONG = "song/LOAD_SONG";
export const REMOVE_SONG = "song/REMOVE_SONG";
export const ADD_SONG = "song/ADD_SONG";
export const EDIT_SONG = "song/EDIT_SONG";

const load = (songs) => ({
  type: LOAD_SONG,
  songs
});


const add = (song) => ({
  type: ADD_SONG,
  song
});

const edit = (song) => ({
  type: EDIT_SONG,
  song,
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


export const addSong = (song) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/upload`, {
    method: 'post',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  })
  if (response.ok) {
    const newSong = await response.json();
    dispatch(add(newSong));
    return newSong
  }
}


export const editSong = (song) => async (dispatch) => {
  const response = await fetch(`/api/songs/${song.id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  })
  if (response.ok) {
    const updatedSong = await response.json();
    dispatch(edit(updatedSong));
    return updatedSong
  }
}

export const removeSong = (song) => async (dispatch) => {

  const response = await csrfFetch('api/songs/home', {
    method: 'DELETE',
  })
  if (response.ok) {

    dispatch(remove(song));
  }
}


const initialState = {};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SONG: {
      return {
        ...state,
        [action.song.id]: action.song
      };
    }
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
    case ADD_SONG: {
      if (!state[action.song.id]) {
        const newState = {
          ...state,
          [action.song.id]: action.song,
        };
        return newState;
      }
    }

    default:
      return state;

  };
};
export default songsReducer;
