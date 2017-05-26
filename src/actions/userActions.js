import Action from './actionTypes';
import usersApi from '../api/usersApi';

export function createUser(user) {
  return { type: Action.createUser, user };
}

export function loadAllUsersSuccess(users) {
  return { type: Action.loadUsersSuccess, users };
}

export function loadAllUsers() {
  return function(dispatch) {
    return usersApi.getAllUsers.then(users => {
      dispatch(loadAllUsersSuccess(users));
    }).catch(err => {
      throw(err);
    });
  };
}
