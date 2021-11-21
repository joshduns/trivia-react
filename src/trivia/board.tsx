import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import ShuffleButton from './ShuffleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



interface question {
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
                                                                {category: '', question: '', answer: ''}
                                                                ]);
    const [gotQuestions, setGotQuestions] = useState<boolean>(false);
    const [gameComplete, setComplete] = useState<boolean>(false);


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
                <QuestionTile subject={questions[0].category} question={questions[0].question} answer={questions[0].answer} />
                <QuestionTile subject={questions[1].category} question={questions[1].question} answer={questions[1].answer} />
                <QuestionTile subject={questions[2].category} question={questions[2].question} answer={questions[2].answer} />
            </Row>
            <Row className="justify-content-center">
                <QuestionTile subject={questions[3].category} question={questions[3].question} answer={questions[3].answer} />
                <QuestionTile subject={questions[4].category} question={questions[4].question} answer={questions[4].answer} />
            </Row>
        </Container>
    )
}

export default TriviaBoard;