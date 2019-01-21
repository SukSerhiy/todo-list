import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
    const { name } = props;
    return (
        <div className='title'>
            <h2>{name}</h2>
        </div>
    )
}

Title.propTypes = {
    name: PropTypes.string.isRequired
};

export default Title;