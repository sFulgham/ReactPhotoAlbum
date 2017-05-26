import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/app';
import HomePage from '../components/home/home';
import AddUserPage from '../components/users/addUser';
import AlbumsPage from '../components/albums/albums';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="AddUser" component={AddUserPage} />
    <Route path="Albums/:userId" component={AlbumsPage} />
  </Route>
);
