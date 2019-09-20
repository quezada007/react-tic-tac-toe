import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, handleClick }) => <button type="button" className="board__square" onClick={() => handleClick(value)}>{value}</button>;

Square.propTypes = {
    value: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Square;