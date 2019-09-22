import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ squares, handleClick }) => (
    <div className="game__board">
        <div className="game__board__row">
            <Square value={squares[0]} handleClick={() => handleClick(0)} classNames="game__board__square no-top-border no-left-border" />
            <Square value={squares[1]} handleClick={() => handleClick(1)} classNames="game__board__square no-top-border" />
            <Square value={squares[2]} handleClick={() => handleClick(2)} classNames="game__board__square no-top-border no-right-border" />
        </div>
        <div className="game__board__row">
            <Square value={squares[3]} handleClick={() => handleClick(3)} classNames="game__board__square no-left-border" />
            <Square value={squares[4]} handleClick={() => handleClick(4)} classNames="game__board__square" />
            <Square value={squares[5]} handleClick={() => handleClick(5)} classNames="game__board__square no-right-border" />
        </div>
        <div className="game__board__row">
            <Square value={squares[6]} handleClick={() => handleClick(6)} classNames="game__board__square no-bottom-border no-left-border" />
            <Square value={squares[7]} handleClick={() => handleClick(7)} classNames="game__board__square no-bottom-border" />
            <Square value={squares[8]} handleClick={() => handleClick(8)} classNames="game__board__square no-bottom-border no-right-border" />
        </div>
    </div>
);

Board.propTypes = {
    squares: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Board;