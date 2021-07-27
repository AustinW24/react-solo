export const LOAD_ALBUM = "album/LOAD_ALBUM";
export const REMOVE_ALBUM = "album/REMOVE_ITEM";
export const UPDATE_ALBUM = "album/UPDATE_ALBUM";
export const ADD_ALBUM = "album/ADD_ALBUM";

const load = (albumId) => ({
    type: LOAD_ALBUM,
    albumId
  });

  // const update = (albumId) => ({
  //   type: UPDATE_ALBUM,
  //   albumId
  // });

  // const add = (albumId) => ({
  //   type: ADD_ALBUM,
  //   albumId
  // });

  // const remove = (albumId) => ({
  //   type: REMOVE_ALBUM,
  //   albumId,
  // });

  export const fetchAlbum = (id) => async (dispatch) => {
    const res = await fetch(`/api/albums/${id}`);
    if (res.ok) {
      const album = await res.json();
      dispatch(load(id));
    }
  };


  const initialState = {};

  const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ALBUM: {
        const newAlbums = {};
        action.albums.forEach((album) => {
          newAlbums[album.id] = album;
        });
        return {
          ...state,
          ...newAlbums,
        };
      }
      case REMOVE_ALBUM: {
        const newState = { ...state };
        delete newState[action.albumId];
        return newState;
      }
      case ADD_ALBUM:
        const newState = { ...state };
            newState = newState[action.albumId]
      case UPDATE_ALBUM: {
        return {
          ...state,
          [action.album.id]: action.album,
        };
      }
      default:
        return state;
    }
  };

  export default albumsReducer;
