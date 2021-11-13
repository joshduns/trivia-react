import * as React from 'react';
import SplashButton from './button';
import SplashHeader from './welcome';
import Col from 'react-bootstrap/Col';


class SplashCanvas extends React.Component {
    render() {
        return (
            <div>
                <SplashHeader />
                <Col>
                    <SplashButton />
                </Col>
            </div>
        )
    }
}

export default SplashCanvas;