const insertTask = function(task) {
    return fetch('/api/insertTask', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(task)
    })
    .then((data) => {
        return;
    })
    .catch(error => {
        throw error;
    })
}

export default insertTask;