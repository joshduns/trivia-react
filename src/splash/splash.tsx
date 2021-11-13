import * as React from 'react';
import SplashButton from './button';
import SplashHeader from './welcome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SplashCanvas extends React.Component {
    render() {
        return (
            <div className="body">
                <SplashHeader />
                <Col>
                    <SplashButton />
                </Col>
            </div>
        )
    }
}

export default SplashCanvas;