class IncorrectPasswordError extends Error {
    constructor() {
        super();
        this.name = 'IncorrectPasswordError';
        this.message = 'Incorrect password';
    }
}

export default IncorrectPasswordError;