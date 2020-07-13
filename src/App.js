import React, { Component } from 'react';
import './Aps.css';
import Container from './templates/Container/Container';
import Current from './templates/Current/Current';


class App extends Component {

  render() {
    return (
      <Container>
        <Current />
      </Container>
    );
  }
}

export default App;