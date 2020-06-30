import React, { Component } from 'react';

import './RangeInput.scss';

export class RangeInput extends Component {
  state = {
    value: '',
  };

  updateInputValue = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(e.target.max);
  };

  render() {
    let { min, max, step } = this.props;
    return (
      <>
        <h1>{this.state.value || 0}</h1>
        <div className='range'>
          <input
            type='range'
            step={step || 0}
            min={min || 0}
            max={max || 100}
            id='range'
            value={this.state.value}
            onChange={this.updateInputValue}
          />
        </div>
      </>
    );
  }
}
