const initialTask = {
    name: null,
    description: null,
    endTask: null,
    completed: false
}

const insertTask = async (taskData) => {
    const task = Object.assign({}, initialTask, taskData);
    delete task['_id'];
    await fetch('/api/insertTask', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
    })
}

export default insertTask;