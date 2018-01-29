import React from 'react';
import queryString from 'query-string';
import fetchFiveDayForecast from '../utils/api';
import { Link } from 'react-router-dom';
import WeatherDay from './WeatherDay';

class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      forecast: null,
      error: null,
      loading: true
    }
  };

  componentDidMount(){
    const city = queryString.parse(this.props.location.search).city;
    fetchFiveDayForecast(city).then(function(res){
      console.log(res);
      if(res.message==="city not found"){
        return this.setState(function(){
          return {
            error: "City not found",
            loading: false
          }
        })
      }
      this.setState(function(){
        return {
          forecast: res,
          loading: false
        }
      })
    }.bind(this));
  }



  render(){
    const forecast = this.state.forecast;
    const loading = this.state.loading;
    const error = this.state.error;

    if(loading === true){
      return <p>Loading</p>
    }

    if(error){
      return(
        <div>
          <p>{error}</p>
        </div>
      )
    }
    
    return(
      <div className="forecast">
        <h1>5 Day/3 hour Forecast for {this.state.forecast.city.name}</h1>
          {this.state.forecast.list.map(function(day){
            return(
              <WeatherDay
                key={day.dt}
                iconName={day.weather[0].icon}
                time={day.dt_txt}
                description={day.weather[0].description}
                temperature={day.main.temp} />
            )
          })}
      </div>
    )
  }
}

export default Forecast;
