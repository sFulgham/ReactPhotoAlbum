import Action from '../actions/actionTypes';

export default function albumsReducer(state = [], action) {
  switch(action.type) {
    case Action.loadAllAlbumsSuccess:
      return action.albums;
    default:
      return state;
  }
}
