import React, { Component } from 'react';

import cn from 'classnames';
import './ProductCard.scss';

export class ProductCard extends Component {
  state = {
    buy: false,
  };

  toggleClass = () => {
    const buyProduct = this.state.buy;
    this.setState({ buy: !buyProduct });
  };

  render() {
    const bottomClass = cn('bottom', { clicked: this.state.buy });
    return (
      <>
        <div className='wrapper'>
          <div className='container'>
            <div className='top'></div>
            <div className={bottomClass}>
              <div className='left'>
                <div className='details'>
                  <h1>Chair</h1>
                  <p>£250</p>
                </div>
                <div className='buy' onClick={this.toggleClass}>
                  <i className='material-icons'>add_shopping_cart</i>
                </div>
              </div>
              <div className='right'>
                <div className='done'>
                  <i className='material-icons'>done</i>
                </div>
                <div className='details'>
                  <h1>Chair</h1>
                  <p>Added to your cart</p>
                </div>
                <div className='remove' onClick={this.toggleClass}>
                  <i className='material-icons'>clear</i>
                </div>
              </div>
            </div>
          </div>
          <div className='inside'>
            <div className='icon'>
              <i className='material-icons'>info_outline</i>
            </div>
            <div className='contents'>
              <table>
                <tr>
                  <th>Width</th>
                  <th>Height</th>
                </tr>
                <tr>
                  <td>3000mm</td>
                  <td>4000mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
