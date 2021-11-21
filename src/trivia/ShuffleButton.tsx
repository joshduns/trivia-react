import React from 'react';
import Button from '@mui/material/Button';
import './ShuffleButton.css';


interface shuffleProps {
  text: string,
  handleShuffle: any,
  disableButton: boolean,
}

const ShuffleButton = ({text, handleShuffle, disableButton}: shuffleProps) => {

  return (
    <div>
      <Button id="shuffleButton" variant="contained" size="small" onClick={handleShuffle} disabled={disableButton}>{text}</Button>
    </div>
  )
};

export default ShuffleButton;
