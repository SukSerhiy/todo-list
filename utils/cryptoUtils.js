const crypto = require('crypto')

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
const genRandomString = (length) => 
    crypto.randomBytes(Math.ceil(length/2))
        .toString('hex')
        .slice(0,length);

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
const sha512 = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const passwordHash = hash.digest('hex');
    return passwordHash;
}

const saltHashPassword = (password) => {
    const salt = genRandomString(16);
    const passwordHash = sha512(password, salt);
    return {
        passwordHash, 
        salt
    };
}

module.exports = { sha512, saltHashPassword };