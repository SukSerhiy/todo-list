import editTask from './api.editTask';
import getTaskById from './api.getTaskById';

const completeTask = function(id) {
    return getTaskById(id)
        .then(task => {
            const { completed } = task;
            return editTask(id, { completed: !completed })
        })
}

export default completeTask;