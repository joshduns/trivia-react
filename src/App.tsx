import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Splash from './splash/splash';
import TriviaBoard from './trivia/board';
import ExitButton from './shared/exit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type appState = {
  mode: string
}

type appProps = {
  questions?: any[]
}

export default class App extends React.Component<appProps, appState> {
  state: appState = {
    mode: ''
  }

  render() {
    return (
      <Container fluid className="App">
        <Row className="bumper"><Col></Col></Row>
        <Row className="body">
          <Splash />
          <TriviaBoard questions={[]} />
        </Row>
        <Row className="justify-content-center bumper"><ExitButton text="Exit"/></Row>
      </Container>
    );
  }
}