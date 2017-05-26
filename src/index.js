import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import ConfigureStore from './store/configureStore';
import routes from './components/routes';
import {loadAllUsers} from './actions/userActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = ConfigureStore();
store.dispatch(loadAllUsers()); /* Intial state from server*/

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
