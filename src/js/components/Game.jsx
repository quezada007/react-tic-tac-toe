/* eslint-disable no-console */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isXNext: true
        };
    }

    handleClick = (i) => {
        console.log(`You clicked button ${i}`);
    }

    render() {
        const { isXNext } = this.state;
        const status = `The Next Player is ${isXNext ? 'X' : 'O'}`;
        const moves = '';
        return (
            <>
                <h1>Tic Tac Toe Game</h1>
                <div className="game">
                    <div className="game__board">
                        <Board handleClick={this.handleClick} />
                    </div>
                    <div className="game__info">
                        <div className="game__status">{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </>
        );
    }
}

export default hot(Game);