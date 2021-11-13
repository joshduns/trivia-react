import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class TriviaBoard extends React.Component {
    render (){
        return (
            <Container fluid className="trivia-board">
                <div>
                <Row>
                    <QuestionTile />
                    <QuestionTile />
                    <QuestionTile />
                </Row>
                <Row>
                    <QuestionTile />
                    <QuestionTile />
                </Row>
                </div>
            </Container>
          );
        }
    }

export default TriviaBoard;