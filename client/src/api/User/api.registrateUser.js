import responseMiddleware from '../responseMiddleware';

const registrateUser = async (userData) => {
    const res = await fetch('/api/registrateUser', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userData)
    });

    responseMiddleware(res);

    const resResult = await res.json();

    if (resResult.success === false) {
        throw new Error(resResult.message);
    } else {
        return resResult;
    }
}

export default registrateUser;