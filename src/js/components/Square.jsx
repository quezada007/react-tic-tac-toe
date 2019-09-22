import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, handleClick, classNames }) => <button type="button" className={classNames} aria-label={value === null ? 'Empty' : value} onClick={() => handleClick(value)}>{value}</button>;

Square.defaultProps = {
    value: '',
    classNames: ''
};

Square.propTypes = {
    value: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    classNames: PropTypes.string
};

export default Square;