import React from 'react';
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {

  render(){
    return(
      <div className='container'>
        <Nav />
        <Home />
      </div>
    );
  }
}


export default App;
