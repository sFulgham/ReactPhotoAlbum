import React, {PropTypes} from 'react';
import Header from '../components/common/header';
import Sidebar from '../components/common/sidebar';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
