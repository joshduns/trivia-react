import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTile from './question';
import ShuffleButton from './ShuffleButton';


export interface question {
    category: string,
    question: string,
    answer: string,
}

const jservice = 'https://jservice.io/api/random?count=10';

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
            body.forEach( (item: any) => {
                if (questionValid(item)){
                    q.push({'category': item.category.title, 'question': item.question, 'answer': item.answer})
                }
            })
            if (q.length >= 5) {
                setQuestions(q);
                setGotQuestions(true);
            } else {
                alert('Unable to get valid questions from JService. Try getting more questions.')
            }
        } else {
            alert('Unable to get questions from JService!')
        }
    }

    const questionValid = (ques: any) => {
        if (ques.category.title === '' || ques.question === '' || ques.answer === '') {
            return false
        } else{
            return true
        }
    }

    return (
        <div className="triviaBoard">
            {!gotQuestions && <ShuffleButton text="Get Some Trivia" handleShuffle={handleShuffle} disableButton={gotQuestions}  />}
            <div className="topRow">
                {gotQuestions && <QuestionTile questionInfo={questions[0]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[1]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[2]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[3]} />}
                {gotQuestions && <QuestionTile questionInfo={questions[4]} />}
            </div>
        </div>
    )
}

export default TriviaBoard;