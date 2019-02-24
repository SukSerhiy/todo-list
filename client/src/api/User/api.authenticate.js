import responseMiddleware from '../responseMiddleware';

const authenticate = async (userData) => {
    const { email, password } = userData
    const res = await fetch('/api/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ email, password })
    });

    responseMiddleware(res);

    const resResult = await res.json();

    if (resResult.success === false) {
        throw new Error(resResult.message);
    } else {
        return resResult;
    }
}

export default authenticate;