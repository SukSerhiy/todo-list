const authenticate = (userData) => {
    const { email, password } = userData
    return fetch('/api/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(resResult => {
        if (resResult.success === false) {
            throw new Error(resResult.message);
        } else {
            const { token } = resResult;
            return { token };
        }
    })
    .catch(err => {
        throw err;
    });
}

export default authenticate;