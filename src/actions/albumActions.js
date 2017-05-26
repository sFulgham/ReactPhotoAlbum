import Action from './actionTypes';
import albumsApi from '../api/albumsApi';

export function loadAllAlbumsSuccess(albums) {
  return { type: Action.loadAlbumsSuccess, albums };
}

export function loadAllAbums(userId) {
  return function(dispatch) {
    return albumsApi.getAllAlbums.then(albums => {
      console.log(albums);
      dispatch(loadAllAlbumsSuccess(albums));
    }).catch(err => {
      throw(err);
    });
  };
}
