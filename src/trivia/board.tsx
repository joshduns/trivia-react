import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import ShuffleButton from './ShuffleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export interface question {
    category: string,
    question: string,
    answer: string,
}

const jservice = 'https://jservice.io/api/random?count=5';

const TriviaBoard = () => {
    const [questions, setQuestions] = useState<Array<question>>([{category: '', question: '', answer: ''},
                                                                {category: '', question: '', answer: ''},
                                                                {category: '', question: '', answer: ''},
                                                                {category: '', question: '', answer: ''}, 
                                                                {category: '', question: '', answer: ''}]);
    const [gotQuestions, setGotQuestions] = useState<boolean>(false);

    async function handleShuffle() {
        const res = await fetch(jservice);
        const body = await res.json();
        let q: question[] = [];
        if (res.ok) {
            body.forEach( (item: any) => {q.push({'category': item.category.title, 'question': item.question, 'answer': item.answer})})
            setQuestions(q);
            setGotQuestions(true);
        } else {
            alert('Unable to get questions from JService!')
        }
        
    }

    return (
        <Container fluid className="trivia-board">
            <ShuffleButton text="Get Some Trivia" handleShuffle={handleShuffle} disableButton={gotQuestions}  />
            <Row className="justify-content-center">
                {gotQuestions && <QuestionTile questionInfo={questions[0]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[1]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[2]} />}
            </Row>
            <Row className="justify-content-center">
                {gotQuestions && <QuestionTile questionInfo={questions[3]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[4]} />}
            </Row>
        </Container>
    )
}

export default TriviaBoard;