import React from 'react';

const Title = props => {
    const { name } = props;
    return (<div className='title'>
        <h2>{name}</h2>
    </div>)
}

export default Title;