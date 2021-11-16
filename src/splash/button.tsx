import * as React from 'react';
import Button from '@mui/material/Button';
import './button.css';

type Props = {
    text: string;
}

const SplashButton: React.FC<Props> = ({text}) => {
    return <Button id="gameButton" variant="contained" size="large">{text}</Button>      
}

export default SplashButton;