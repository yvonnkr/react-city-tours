import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  toggleShowInfo = () => {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className='tour'>
        <div className='image-container'>
          <img src={img} alt='city' />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close'></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info{' '}
            <span onClick={this.toggleShowInfo}>
              <i className='fas fa-caret-square-down'></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
