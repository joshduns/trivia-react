import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import Shuffle from './shuffle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


type boardState = {
    gameComplete: boolean
}

type boardProps = {
    questions: []
}


class TriviaBoard extends React.Component<boardProps, boardState> {
    constructor(props: boardProps) {
        super(props);
        this.handleShuffle = this.handleShuffle.bind(this);
    }

    state: boardState = {
        gameComplete: false
    }

    handleShuffle() {
        console.log('this will make request from api')
    }

    render() {
        return (
            <Container fluid className="trivia-board">
                <Shuffle text="Get Some Trivia" handleShuffle={this.handleShuffle} />
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
}

export default TriviaBoard;