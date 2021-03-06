import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './splash.css';
import TriviaBoard from '../trivia/board';
import ExitButton from '../shared/exit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SplashButton from './button';
import SplashHeader from './welcome';


interface splashState {
    playing: boolean,
    playingTrivia: boolean,
    playingJeop: boolean,
}

interface splashProps {
}


class Splash extends React.Component<splashProps, splashState> {
    constructor(props: splashProps) {
        super(props);
        this.handleTrivia = this.handleTrivia.bind(this);
        this.handleJeop = this.handleJeop.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    state: splashState = {
        playing: false,
        playingTrivia: false,
        playingJeop: false
    }

    handleExit() {
        this.setState({playing: false, playingTrivia: false, playingJeop: false })
      }
    
    handleTrivia() {
        this.setState(state => ({playing: true, playingTrivia: true, playingJeop: false}))
    }

    handleJeop() {
        this.setState(state => ({playing: true, playingTrivia: false, playingJeop: true}))
    }

    render() {
        let choices;
        if (!this.state.playing) {
            choices =   <div className="alignCenter">
                            <SplashHeader />
                            <div className="chooseButtons">
                                <SplashButton text="Trivia" handleGame={this.handleTrivia} disabled={false} />
                                <SplashButton text="Jeopardy" handleGame={this.handleJeop} disabled={true} />
                            </div>
                        </div>
        }

        return (
            <body className="app">
                <header className="header"></header>
                <main className="body">
                    { !this.state.playing ? choices : null }
                    { this.state.playingTrivia ? <TriviaBoard /> : null }
                </main>
                <footer className="footer">
                    {this.state.playing ? <ExitButton handleExit={this.handleExit} /> : null }
                </footer>
            </body>
        )
    }
}

export default Splash;