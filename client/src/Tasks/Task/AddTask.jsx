import React, { PureComponent } from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'element-react';
import{ EditTask as AddTaskModal} from '../../modals'
import { insertTask } from '../../api/Task';

class AddTask extends PureComponent {
    static propTypes = {
        loadData: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
    }

    handleClick = (e) => {
        this.modalRef.current.openModal();
    }

    saveTask = async (form) => {
        const { loadData } = this.props;
        try {
            insertTask(form);
            loadData && loadData();
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        const { 
            saveTask, 
            modalRef,
        } = this;
        return (<div>
            <Button 
                className='add-task-button'
                icon='plus' 
                onClick={this.handleClick} 
            />
            <AddTaskModal 
                ref={ modalRef }
                onSubmit={saveTask}
            />
        </div>)
    }
}

export default AddTask;