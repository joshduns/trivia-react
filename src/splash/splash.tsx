import * as React from 'react';
import SplashButton from './button';
import SplashHeader from './welcome';
import Col from 'react-bootstrap/Col';
import CSS from 'csstype';

const canvasStyle: CSS.Properties = {
    display: 'none'
}

const Splash: React.FC = () => {
    return (
        <div style={canvasStyle}>
            <SplashHeader />
            <Col>
                <SplashButton text="Trivia"/>
                <SplashButton text="Jeopardy"/>
            </Col>
        </div>
    )
}

export default Splash;