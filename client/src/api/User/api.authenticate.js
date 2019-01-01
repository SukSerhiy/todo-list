const authenticate = (userData) => {
    return fetch('/api/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userData)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => {
        throw err;
    });
}

export default authenticate;