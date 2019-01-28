import { HTTP_401, Http_500 } from '../constants/en'

const httpErrorMessages = new Map([
    [401,  HTTP_401],
    [500, Http_500]
  ]);

class HttpError extends Error {
    constructor(code) {
        super();
        this.name = 'HttpError';
        this.message = httpErrorMessages.get(code) || 'Unknown error';
    }
}

export default HttpError;