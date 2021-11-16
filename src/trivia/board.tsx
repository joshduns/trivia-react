import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

type BoardProps = {
    questions: []
}


const TriviaBoard: React.FC<BoardProps> = () => {
    return (
        <Container fluid className="trivia-board">
            <Row className="justify-content-center">
                <QuestionTile />
                <QuestionTile />
                <QuestionTile />
            </Row>
            <Row className="justify-content-center">
                <QuestionTile />
                <QuestionTile />
            </Row>
        </Container>
    )
}


export default TriviaBoard;