import React from 'react';
import Action from './action';
import { Button } from 'element-react';

const Controls = props => {
    const { ID, onEdit, onDelete } = props;
    return (
        <div className='controls'>
            <div className='actions'>
                <Action 
                    className='edit-icon' 
                    onClick={() => onEdit(ID)} 
                />
                <Action 
                    className='remove-icon' 
                    onClick={() => onDelete(ID)}
                />
            </div>

            <Button>
                Mark as resolved
            </Button>
        </div>
    )
}

export default Controls;