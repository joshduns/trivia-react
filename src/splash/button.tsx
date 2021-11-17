import React from 'react';
import Button from '@mui/material/Button';
import './button.css';

type gameProps = {
    text: string,
    handleGame: () => void;
}

class SplashButton extends React.Component<gameProps> {
    render() {
        return <Button id="gameButton" variant="contained" size="large" onClick={this.props.handleGame}>{this.props.text}</Button> 
    }      
}

export default SplashButton;