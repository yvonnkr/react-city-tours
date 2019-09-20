import React, { Component } from 'react';
import Tour from '../Tour';
import { tourData } from '../../tourData';
import './tourlist.scss';

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    this.setState(prevState => ({
      tours: prevState.tours.filter(tour => tour.id !== id)
    }));
  };

  render() {
    const { tours } = this.state;
    return (
      <section className='tourList'>
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
