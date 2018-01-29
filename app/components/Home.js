import React from 'react';
import SelectForm from './SelectForm';
import fetchCityForecast from '../utils/api';
import Forecast from './Forecast';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
  }

  render(){
    return(
      <div className="home">
        <h1 className="banner">Enter a City, State</h1>
        <br />
        <SelectForm onChange={this.selectCity}/>
        <br />
        <Link
          to={{
            pathname: '/forecast',
            search: `?city=${this.state.selectedCity}`
          }}>
          <button>
            Get Weather
          </button>
        </Link>
      </div>
    )
  }
}


export default Home;
