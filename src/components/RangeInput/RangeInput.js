import React, { Component } from 'react';

export class RangeInput extends Component {
  state = {
    value: '',
  };

  updateInputValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    let { min, max } = this.props;

    return (
      <>
        <h1>{this.state.value}</h1>
        <div className='range'>
          <input
            type='range'
            step='1'
            min={min | 0}
            max={max | 100}
            id='range'
            value={this.state.value}
            onChange={this.updateInputValue}
          />
        </div>
      </>
    );
  }
}
