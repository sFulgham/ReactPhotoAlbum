import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Users extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  addUser(user, index){
    return (
      <li className="nav-item" key={index}>
        <Link className="nav-link" to={`/Albums/${user.id}`}>{user.username}</Link>
      </li>
    );
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.users.map(this.addUser)}
        </ul>
        <Link to="/AddUser">Add User</Link>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Users);
