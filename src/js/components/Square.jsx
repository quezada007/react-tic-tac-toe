import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, handleClick }) => <button type="button" className="game__board__square" aria-label={value === null ? 'Empty' : value} onClick={() => handleClick(value)}>{value}</button>;

Square.defaultProps = {
    value: ''
};

Square.propTypes = {
    value: PropTypes.string,
    handleClick: PropTypes.func.isRequired
};

export default Square;