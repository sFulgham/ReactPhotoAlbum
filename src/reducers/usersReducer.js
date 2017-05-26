import Action from '../actions/actionTypes';

export default function usersReducer(state = [], action) {
  switch(action.type) {
    case Action.createUser:
      return [...state, Object.assign({}, action.user)];
    case Action.loadUsersSuccess:
      return action.users;
    default:
      return state;
  }
}
