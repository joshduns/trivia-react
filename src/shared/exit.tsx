import React from 'react';
import './exit.css';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


interface Props {
    handleExit: () => void;
}

const ExitButton = ({handleExit}: Props) => {
    return (
        <IconButton color="secondary" aria-label="home" size="large" onClick={handleExit}>
            <HomeIcon fontSize="inherit" />
        </IconButton> 
    )
}

export default ExitButton;