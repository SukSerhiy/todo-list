import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import TaskContainer from './TaskContainer';
import TaskField from './TaskField';
import TaskName from './TaskName';
import { CREATED, LAST_MODIFIED_DATE } from '../constants/en';
import deleteTask from '../api/api.deleteTask';

import './style.css';

const dataSetCreator = (name, value) => {
    return {
        name,
        value
    }
};

class Task extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        creationDate: PropTypes.instanceOf(Date),
        lastModifiedDate: PropTypes.instanceOf(Date)
    };

    static defaultProps = {
        creationDate: new Date(),
        lastModifiedDate: new Date()
    };

    handleEdit(ID) {
        alert(`edit: ${ID}`);
    }

    handleDelete(ID) {
        const { loadData } = this.props;
        deleteTask(ID)
        .then(() => {
            loadData && loadData();
        })
        .catch(error => {
            console.error(error);
        })
    }

    handleChangeStatus(ID) {

    }

    render() {
        const { ID, name, creationDate, lastModifiedDate } = this.props;

        const dataSet = {
            'creationDate': dataSetCreator(
                CREATED,
                creationDate.toLocaleString()
            ),
            'lastModifiedDate': dataSetCreator(
                LAST_MODIFIED_DATE,
                lastModifiedDate.toLocaleString()
            )
        };

        return (
        <TaskContainer 
            ID={ID}
            onEdit={this.handleEdit.bind(this)}
            onDelete={this.handleDelete.bind(this)}
            onChangeStatus={this.handleChangeStatus.bind(this)}
        >
                <Fragment>
                    <TaskName 
                        name={name}
                    />
                    {Object.keys(dataSet).map((prop, idx) => {
                        const {name, value} = dataSet[prop];
                        return (
                        <TaskField 
                            key={idx} 
                            name={name}
                            value={value} 
                        />)
                    })}
                </Fragment>
            </TaskContainer>
        )
    }
}

export default Task;