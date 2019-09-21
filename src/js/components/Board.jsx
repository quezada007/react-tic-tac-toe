import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ squares, handleClick }) => (
    <div className="board">
        <div className="board__row">
            <Square value={squares[0]} handleClick={() => handleClick(0)} />
            <Square value={squares[1]} handleClick={() => handleClick(1)} />
            <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board__row">
            <Square value={squares[3]} handleClick={() => handleClick(3)} />
            <Square value={squares[4]} handleClick={() => handleClick(4)} />
            <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board__row">
            <Square value={squares[6]} handleClick={() => handleClick(6)} />
            <Square value={squares[7]} handleClick={() => handleClick(7)} />
            <Square value={squares[8]} handleClick={() => handleClick(8)} />
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