import responseMiddleware from '../responseMiddleware';

const initialTask = {
    name: null,
    description: null,
    endTask: null,
    completed: false
}

const insertTask = async (taskData) => {
    const task = { ...initialTask, ...taskData };
    return responseMiddleware(await fetch('/api/task', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
    }));
}

export default insertTask;