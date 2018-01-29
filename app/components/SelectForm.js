import React from 'react';
import PropTypes from 'prop-types';



class SelectForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState(
      {
        city: value
      }, () => {
        this.props.onChange(
          this.state.city
        )
      }
    )
  }



  render(){
    return (
      <div>
        <form>
          <input
            id="cityentry"
            placeholder="Portland, Oregon"
            type="text"
            autoComplete="off"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
        </form>
      </div>
    )
  }
}

// onClick={this.props.onClick.bind(null,"Portland")}>
export default SelectForm;
