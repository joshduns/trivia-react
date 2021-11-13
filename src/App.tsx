import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashCanvas from './splash/splash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid className="App">
      <Row className="bumper"><Col></Col></Row>
      <Row className="body">
        <SplashCanvas />
      </Row>
      <Row className="bumper"><Col></Col></Row>
    </Container>
  );
}

export default App;
