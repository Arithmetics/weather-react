import React from 'react';
import PropTypes from 'prop-types';

class SelectForm extends React.Component {

  render(){
    return (
      <div>
        <input placeholder="Portland, Oregon" />
        <br />
        <button
          onClick={this.props.onClick.bind(null,"Portland")}>
          Get Weather!
        </button>
      </div>
    )
  }
}

SelectForm.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SelectForm;
