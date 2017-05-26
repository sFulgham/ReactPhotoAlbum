import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render(){
    return (
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <p>
          Select a user to display their albums.
        </p>
      </main>
    );
  }
}

export default Home;
