import {combineReducers} from 'redux';
import users from './usersReducer';
import albums from './albumsReducer';

const rootReducer = combineReducers({
  users,
  albums
});

export default rootReducer;
