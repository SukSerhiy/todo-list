class ValidationFailedError extends Error {
    constructor() {
        super();
        this.name = 'ValidationFailedError';
        this.message = 'Some fields are filled incorrectly';
    }
}

export default ValidationFailedError;