import HttpError from '../Errors/HttpError'

const responseMiddleware = (res) => {
    const { status } = res;
    if (status === 200) {
        return;
    } else {
        throw new HttpError(status);
    }
}

export default responseMiddleware;