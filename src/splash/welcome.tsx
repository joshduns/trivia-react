import * as React from "react";
import './splash.css';


class SplashHeader extends React.Component {
    render() {
        const welcome = 'Choose A Game Mode';
        return <h1 className="chooseHeader">{welcome}</h1>
    }
}

export default SplashHeader;