import editTask from './api.editTask';
import getTaskById from './api.getTaskById';

const completeTask = async (id) => {
    const task = await getTaskById(id)
    const { completed } = task;
    await editTask(id, { completed: !completed });
}

export default completeTask;