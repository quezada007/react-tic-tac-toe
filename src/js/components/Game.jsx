/* eslint-disable no-console */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            isXNext: true
        };
    }

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick = (i) => {
        const { stepNumber, isXNext } = this.state;
        let { history } = this.state;
        history = history.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([
                {
                    squares
                }
            ]),
            stepNumber: history.length,
            isXNext: !isXNext
        });
    }

    render() {
        const { history, stepNumber, isXNext } = this.state;
        let status = `The Next Player is ${isXNext ? 'X' : 'O'}`;
        const moves = '';
        const current = history[stepNumber];
        const winner = this.calculateWinner(current.squares);
        if (winner) {
            status = `Winner: ${winner}`;
        }
        if (stepNumber === 9 && !winner) {
            status = 'No Winner';
        }
        return (
            <>
                <h1>Tic Tac Toe Game</h1>
                <div className="game">
                    <div className="game__board">
                        <Board squares={current.squares} handleClick={this.handleClick} />
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