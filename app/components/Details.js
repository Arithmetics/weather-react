import React from 'react';
import kToF from '../utils/helpers';
import moment from 'moment';

class Details extends React.Component {
  render(){
    const fullForecast = this.props.location.state.fullForecast;
    const iconUrl="../../app/images/weather-icons/" + fullForecast.weather[0].icon + ".svg";
    console.log(fullForecast);
    return (
      <div className="weatherdetail">
        <div>
          <img src={iconUrl} alt="weather"></img>
        </div>
        <ul>
          <li>Time Period: {moment(fullForecast.dt_txt).format("MMMM Do h:mm a")}</li>
          <li>Temperature: {kToF(fullForecast.main.temp)} &deg; F</li>
          <li>Wind: {fullForecast.wind.speed}, {fullForecast.wind.deg}</li>
          <li>Pressure: {fullForecast.main.pressure}</li>
          <li>Humidity: {fullForecast.main.humidity}</li>
          <li>Weather: {fullForecast.weather[0].description}</li>
        </ul>
      </div>
    );
  }
}


export default Details;
