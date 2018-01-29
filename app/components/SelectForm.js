import React from 'react';
import PropTypes from 'prop-types';


class SelectForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState(function(){
      return {
        city: value
      }
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.state.city
    )
  }

  render(){
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            id="cityentry"
            placeholder="Portland, Oregon"
            type="text"
            autoComplete="off"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
          <button
            type='submit'
            disabled={!this.state.city}>
            Update City State
          </button>
        </form>
      </div>
    )
  }
}

// onClick={this.props.onClick.bind(null,"Portland")}>
export default SelectForm;
