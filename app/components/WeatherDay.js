import React from 'react';


class WeatherDay extends React.Component {


  render(){
    const iconUrl="../../app/images/weather-icons/" + this.props.iconName + ".svg";
    return (
      <div  className="weathercard">
        <img src={iconUrl} alt="weather"></img>
        <h4>{this.props.time}</h4>
        <h5>{this.props.description}</h5>
        <h5>{this.props.temperature}</h5>
      </div>
    )
  }
}

export default WeatherDay;
