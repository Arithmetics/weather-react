import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Forecast from './Forecast';
import { BrowserRouter,
         Route,
         Switch,
         NavLink } from 'react-router-dom';



class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
