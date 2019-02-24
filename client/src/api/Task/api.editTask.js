import responseMiddleware from '../responseMiddleware';

const editTask = async (id, task) => {
    return responseMiddleware(await fetch('/api/task', {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id, task})
    }));
}

export default editTask;