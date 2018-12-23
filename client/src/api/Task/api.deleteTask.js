const deleteTask = function(id) {
    return fetch('/api/deleteTask', {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id})
    })
    .then((data) => {
        return;
    })
    .catch(error => {
        throw error;
    })
}

export default deleteTask;