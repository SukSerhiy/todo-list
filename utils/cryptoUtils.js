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
    const value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
}

const saltHashPassword = (password) => {
    const salt = genRandomString(16);
    const passwordData = sha512(password, salt);
    const { passwordHash } = passwordData;
    return {
        passwordHash, 
        salt
    };
}

module.exports = saltHashPassword;