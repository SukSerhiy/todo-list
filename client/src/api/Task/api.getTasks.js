import responseMiddleware from '../responseMiddleware';

const getTasks = async () => {
    const res = await fetch('/api/getTasks');
    responseMiddleware(res);
    return await res.json();
}

export default getTasks;