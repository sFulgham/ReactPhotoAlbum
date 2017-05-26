import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class AddUser extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      user: {name: ''}
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onUserNameChange(event) {
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({user: user});
  }

  onClickSave(event){
    event.preventDefault();
    this.props.actions.createUser(this.state.user);
  }

  render(){
    return(
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <form className="form-inline">
          <h3>Add User</h3>
          <label className="sr-only" htmlFor="inlineFormInput">Name</label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            id="inlineFormInput"
            placeholder="User Name"
            onChange={this.onUserNameChange}
            value={this.state.user.name} />
          <button type="text" className="btn btn-primary" onClick={this.onClickSave}>Save</button>
        </form>
      </main>
    );
  }
}

AddUser.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
