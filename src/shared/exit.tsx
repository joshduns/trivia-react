import React from 'react';
import Button from '@mui/material/Button';
import './exit.css';


interface Props {
    text: string;
    handleExit: () => void;
}

class ExitButton extends React.Component<Props> {
    render() {
        return <Button id="exitButton" variant="contained" size="large" onClick={this.props.handleExit}>{this.props.text}</Button> 
    }     
}

export default ExitButton;