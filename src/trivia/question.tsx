import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './question.css';
import { question } from './board';


interface questionProps {
    questionInfo: question
}

const QuestionTile = ({questionInfo}: questionProps) => {
    const initialStep = () => 1;
    const initialText = () => questionInfo.category;
    const [step, setStep] = useState(initialStep);
    const [display, setDisplay] = useState(initialText);
    console.log('category: ', questionInfo.category);

    const handleClick = () => {
        if (step === 1) {
            setDisplay(questionInfo.question);
            setStep(2);
        } else if (step === 2) {
            setDisplay(questionInfo.answer);
            setStep(3);
        } else if (step === 3) {
            setDisplay(questionInfo.category);
            setStep(1);
        } 
    }

    return <Button id="questionButton" onClick={handleClick}>{display}</Button>
};


export default QuestionTile;