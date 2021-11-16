import * as React from 'react';
import Button from '@mui/material/Button';
import './exit.css';

type Props = {
    text: string;
}

const ExitButton: React.FC<Props> = ({text}) => {
    return <Button id="exitButton" variant="contained" size="large">{text}</Button>      
}

export default ExitButton;