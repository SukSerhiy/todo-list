import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'element-react';
import Action from './Action';

const Controls = props => {
  const { 
      id, 
      onEdit, 
      onDelete, 
      completed, 
      onComplete 
  } = props;
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
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  completed: PropTypes.bool
}

Controls.defaultProps = {
  completed: false
}

export default Controls;