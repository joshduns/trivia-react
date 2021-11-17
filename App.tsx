// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Splash from './splash/Splash';
// import TriviaBoard from './trivia/board';
// import ExitButton from './shared/exit';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// type appState = {
//   playing: boolean,
//   isTrivia: boolean,
//   isJeop: boolean,
// }

// type appProps = {
//   questions?: any[]
// }

// export default class App extends React.Component<appProps, appState> {
//   state: appState = {
//     playing: false,
//     isTrivia: false,
//     isJeop: false,
//   }

//   handleExit() {
//     this.setState({playing: false})
//   }

//   handleTrivia() {
//     this.setState({isTrivia: true, playing: true, isJeop: false})
//   }

//   render() {
//     return (
//       <Container fluid className="App">
//         <Row className="bumper"><Col></Col></Row>
//         <Row className="body">
//           {!this.state.playing ? <Splash /> : null }
//           {this.state.isTrivia ? <TriviaBoard questions={[]} /> : null }
//         </Row>
//         <Row className="justify-content-center bumper">
//           {this.state.playing ? <ExitButton handleExit={this.handleExit} text="Exit"/> : null }
//         </Row>
//       </Container>
//     );
//   }
// }