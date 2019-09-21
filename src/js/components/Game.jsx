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

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0
        });
    }

    getMoves = (history) => history.map((step, move) => {
        const desc = move
            ? `Go to Move #${move}`
            : 'Go to Game Start';
        return (
            <li className="game__step" key={move.toString()}>
                <button type="button" className="game__step__btn" onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    getStartButton = () => (
        <li className="game__step" key="10">
            <button type="button" className="game__step__btn" onClick={() => this.resetGame()}>New Game</button>
        </li>
    );

    resetGame = () => {
        this.setState(
            {
                history: [
                    {
                        squares: Array(9).fill(null)
                    }
                ],
                stepNumber: 0,
                isXNext: true
            }
        );
    }

    render() {
        const { history, stepNumber, isXNext } = this.state;
        let status = `The Next Player is ${isXNext ? 'X' : 'O'}`;
        const moves = this.getMoves(history);
        const current = history[stepNumber];
        const winner = this.calculateWinner(current.squares);
        let newGame = null;
        if (winner) {
            status = `Winner: ${winner}`;
            newGame = this.getStartButton();
        }
        if (stepNumber === 9 && !winner) {
            status = 'No Winner';
            newGame = this.getStartButton();
        }
        return (
            <>
                <div className="game">
                    <div className="game__board">
                        <Board squares={current.squares} handleClick={this.handleClick} />
                    </div>
                    <div className="game__info">
                        <div className="game__status">{status}</div>
                        <ol className="game__steps">
                            {moves}
                            {newGame}
                        </ol>
                    </div>
                </div>
            </>
        );
    }
}

export default hot(Game);