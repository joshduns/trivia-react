import React from 'react';
import Button from '@mui/material/Button';
import './shuffle.css';


type shuffleState = {
    shuffled: boolean,
}

type shuffleProps = {
    text: string,
    handleShuffle: () => void;
}

class Shuffle extends React.Component<shuffleProps, shuffleState> {
    state: shuffleState = {
        shuffled: false,
    }

    render() {
        return <Button id="shuffleButton" variant="contained" size="small" onClick={this.props.handleShuffle}>{this.props.text}</Button> 
    }      
}

export default Shuffle;