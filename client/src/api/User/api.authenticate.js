const authenticate = async (userData) => {
    const { email, password } = userData
    console.log('email = ', email)
    const res = await fetch('/api/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ email, password })
    });

    const resResult = res.json();

    if (resResult.success === false) {
        throw new Error(resResult.message);
    } else {
        return resResult;
    }
}

export default authenticate;