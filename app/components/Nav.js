import React from 'react';
import SelectForm from './SelectForm';
import { Link } from 'react-router-dom';
import Forecast from './Forecast';


class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCity: ""
    };

    this.selectCity = this.selectCity.bind(this);
  }

  selectCity(city){
    this.setState(function(){
      return {
        selectedCity: city
      }
    });
    console.log(this.state);
  }

  render(){
    return(
      <div className="nav">
        <h1 className="navheader">
          Weather App w/React!
        </h1>
        <div className="navright">
          <div className="b">
            <SelectForm onChange={this.selectCity}/>
          </div>

          <div className="b">
            <Link
              to={{
                pathname: '/forecast',
                search: `?city=${this.state.selectedCity}`
              }}>
              <button className="navbutton">
                Get Weather
              </button>
            </Link>
          </div>

        </div>
      </div>

    );
  }
}



export default Nav;
