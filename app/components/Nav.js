import React from 'react';
import SelectForm from './SelectForm';


class Nav extends React.Component {
  constructor(props){
    super(props);

    this.logCity = this.logCity.bind(this);
  }

  logCity(city){
    console.log(city);
  }

  render(){
    return(
      <div className="nav">
        <h1 className="navheader">
          Weather App w/React!
        </h1>
        <div className="navright">

        </div>
      </div>

    );
  }
}



export default Nav;
