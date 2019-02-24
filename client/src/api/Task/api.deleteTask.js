import responseMiddleware from '../responseMiddleware';

const deleteTask = async (id) => {
    return responseMiddleware(await fetch('/api/task', {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id})
    }));
}

export default deleteTask;