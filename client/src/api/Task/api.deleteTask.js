const deleteTask = async (id) => {
    await fetch('/api/deleteTask', {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({id})
    })
}

export default deleteTask;