import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navabar';
import TourList from './components/TourList';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <TourList />
      </Fragment>
    );
  }
}

export default App;
