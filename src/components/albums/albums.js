import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as albumActions from '../../actions/albumActions';

class Albums extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadAllAbums(this.props.params.userId);
  }

  displayAlbums(album, index){
    return (
      <li className="nav-item" key={index}>
        <Link className="nav-link" to={`/photos/${album.id}`}>{album.title}</Link>
      </li>
    );
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.albums.map(this.displayAlbums)}
        </ul>
      </div>
    );
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(albumActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
