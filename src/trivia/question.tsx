import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './question.css';

interface questionProps {
    subject: string,
    question: string,
    answer: string,
}

const QuestionTile = ({subject, question, answer}: questionProps) => {
    const [step, setStep] = useState(1);

    return <Button id="questionTile" variant="contained" size="large">{subject}</Button>
}


export default QuestionTile;