import * as React from 'react';
import Button from '@mui/material/Button';
import './button.css';


class SplashButton extends React.Component {
    render() {
        return (
            <div>
                <Button id="gameButton" variant="contained" size="large">Trivia</Button>
                <Button id="gameButton" variant="contained" size="large">Jeopardy</Button>
            </div>
        )
    }
}

export default SplashButton;