const editTask = async (id, params) => {
    await fetch('/api/updateTask', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id, params})
    })
}

export default editTask;