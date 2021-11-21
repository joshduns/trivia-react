import React from 'react';
import Button from '@mui/material/Button';
import styles from './ShuffleButton.module.css';


interface shuffleProps {
  text: string,
  handleShuffle: any,
}

const ShuffleButton = ({text, handleShuffle}: shuffleProps) => {

  return (
    <div className={styles.ShuffleButton}>
    <Button id="shuffleButton" variant="contained" size="small" onClick={handleShuffle} >{text}</Button>
  </div>
  )
};

export default ShuffleButton;
