import React from 'react';
import SelectForm from './SelectForm';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCity: "",
      selectedState: ""
    };

    this.selectCity = this.selectCity.bind(this);
  }

  selectCity(city){
    this.setState(function(){
      return {
        selectedCity: city
      }
    })
  }

  render(){
    return(
      <div className="home">
        <h1 className="banner">Enter a City, State</h1>
        <SelectForm onClick={this.selectCity}/>
        <h1>{this.state.selectedCity}</h1>
      </div>
    )
  }
}


export default Home;
