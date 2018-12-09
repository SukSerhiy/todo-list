import React from 'react'
import PropTypes from 'prop-types';

const Action = ({className, onClick}) => (
    <i 
        className={`icon ${className}`} 
        onClick={onClick}
    />
)

Action.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Action;