const editTask = function(id, params) {
    return fetch('/api/updateTask', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id, params})
    })
    .then((data) => {
        return;
    })
    .catch(error => {
        throw error;
    })
}

export default editTask;