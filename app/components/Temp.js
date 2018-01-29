import React from 'react';


class Temp extends React.Component {
  render(){
    return(
      <div>
        <h1>Success</h1>
      </div>
    )
  }
}

export default Temp;



class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCity: "Boston",
      forecast: null
    };

    this.selectCity = this.selectCity.bind(this);
  }

  componentDidMount(){
    this.selectCity(this.state.selectedCity)
  }

  selectCity(city){
    this.setState(function(){
      return {
        selectedCity: city,
        forecast: null
      }
    });

    fetchCityForecast(city).then((res) => {
      // console.log(res.weather[0]);
      this.setState(() => {
        return {
          forecast: res
        }
      });
    });
    console.log(this.state.forecast)
  }

  render(){
    return(
      <div className="home">
        <h1 className="banner">Enter a City, State</h1>
        <SelectForm onClick={this.selectCity}/>
        <h1>{this.state.selectedCity}</h1>
        {!this.state.forecast
          ? <p>Loading</p>
          : <Forecast forecast={this.state.forecast}/>}
      </div>
    )
  }
}
