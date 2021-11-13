import * as React from 'react';
import SplashButton from './button';
import SplashHeader from './welcome';
import Col from 'react-bootstrap/Col';


const SplashCanvas: React.FC = () => {
    return (
        <div>
            <SplashHeader />
            <Col>
                <SplashButton text="Trivia"/>
                <SplashButton text="Jeopardy"/>
            </Col>
        </div>
    )
}

export default SplashCanvas;