import React, {PropTypes} from 'react';
import Users from '../users/users';

class Sidebar extends React.Component {
  render(){
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <h3>Users</h3>
        <Users />
      </nav>
    );
  }
}

export default Sidebar;
