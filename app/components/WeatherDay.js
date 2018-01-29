import React from 'react';
import kToF from '../utils/helpers';
import moment from 'moment';


class WeatherDay extends React.Component {


  render(){
    const iconUrl="../../app/images/weather-icons/" + this.props.iconName + ".svg";
    kToF(300);
    return (
      <div  className="weathercard">
        <div className="imageholder">
          <img src={iconUrl} alt="weather"></img>
        </div>
        <h4>{moment(this.props.time).format("MMMM Do")}</h4>
        <h4>{moment(this.props.time).format("h:mm a")}</h4>
        <h5>{this.props.description}</h5>
        <h5>{kToF(this.props.temperature)} &deg; F</h5>
      </div>
    )
  }
}

export default WeatherDay;
