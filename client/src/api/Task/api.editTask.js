import responseMiddleware from '../responseMiddleware';

const editTask = async (id, params) => {
    return responseMiddleware(await fetch('/api/updateTask', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id, params})
    }));
}

export default editTask;