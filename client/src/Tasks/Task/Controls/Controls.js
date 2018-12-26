import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'element-react';
import Action from './action';

const Controls = props => {
    const { id, onEdit, onDelete, completed, onComplete } = props;
    console.log(completed);
    return (
        <div className='controls'>
            <div className='complete-control'>
                <Checkbox 
                    checked={completed} 
                    onChange={() => onComplete(id)}
                />
            </div>

            <div className='actions'>
                <Action 
                    className='edit-icon' 
                    onClick={() => onEdit(id)} 
                />
                <Action 
                    className='remove-icon' 
                    onClick={() => onDelete(id)} 
                />
            </div>
        </div>
    )
}

Controls.propTypes = {
    id: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired
}

Controls.defaultProps = {
    completed: false
}

export default Controls;