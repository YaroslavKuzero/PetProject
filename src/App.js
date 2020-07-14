import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Current from './components/Current/Current';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';
import Logo from './components/Logo/Logo';
import Tabis from './components/Tabs/Tabs';


class App extends Component {

  render() {
    return (
      <>
        <Logo />
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