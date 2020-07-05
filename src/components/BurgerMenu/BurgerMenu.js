import React, { Component } from 'react';
import cn from 'classnames';

import './BurgerMenu.scss';

export class BurgerMenu extends Component {
  state = {
    burgerOpen: false,
  };
  toggleBurger = () => {
    const position = this.state.burgerOpen;
    this.setState({ burgerOpen: !position });
  };

  render() {
    const burgerClass = cn('burger', { on: this.state.burgerOpen });
    return (
      <div className='wrapper-burger'>
        <a href='#' className={burgerClass} onClick={this.toggleBurger}>
          <div className='bar bun-top'></div>
          <div className='bar lettuce'></div>
          <div className='bar mustard'></div>
          <div className='bar ketchup'></div>
          <div className='bar patty'></div>
          <div className='bar bun-bot'></div>
        </a>
      </div>
    );
  }
}
