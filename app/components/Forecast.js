import React from 'react';

class Forecast extends React.Component {
  render(){
    return(
      <div className="forecast">
        {this.props.forecast.weather[0].description}
      </div>
    )
  }
}

export default Forecast;
