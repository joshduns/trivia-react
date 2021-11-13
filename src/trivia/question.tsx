import * as React from 'react';
import Button from '@mui/material/Button';
import './question.css';


class QuestionTile extends React.Component {
    render() {
        return (
            <div>
                <Button id="questionTile" variant="contained" size="large">question</Button>
            </div>
        )
    }
}

export default QuestionTile;