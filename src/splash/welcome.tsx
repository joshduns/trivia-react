import * as React from "react";


class SplashHeader extends React.Component {
    render() {
        const welcome = 'Choose A Game Mode';
        return <h1 style={{color: "white", marginBottom: "25px"}}>{welcome}</h1>
    }
}

export default SplashHeader;