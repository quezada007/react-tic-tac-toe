import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ handleClick }) => (
    <div className="board">
        <div className="board__row">
            <Square value="0" handleClick={handleClick} />
            <Square value="1" handleClick={handleClick} />
            <Square value="2" handleClick={handleClick} />
        </div>
        <div className="board__row">
            <Square value="3" handleClick={handleClick} />
            <Square value="4" handleClick={handleClick} />
            <Square value="6" handleClick={handleClick} />
        </div>
        <div className="board__row">
            <Square value="7" handleClick={handleClick} />
            <Square value="8" handleClick={handleClick} />
            <Square value="9" handleClick={handleClick} />
        </div>
    </div>
);

Board.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default Board;