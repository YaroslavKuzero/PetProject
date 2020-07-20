import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Current from './components/Current/Current';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Header from './components/Header/Header'
import Favicon from 'react-favicon'
class App extends Component {

  render() {
    return (
      <>
        <Favicon url='./icons/favicon.ico' />
        <Header />
        <Container>
          <Current />
          <Daily />
          <Hourly />
        </Container>
      </>
    );
  }
}

export default App;