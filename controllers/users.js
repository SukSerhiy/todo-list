const Users = require('../models/users'),
    cryptoUtils = require('../utils/cryptoUtils'),
    jwt = require('jsonwebtoken'),
    saltHashPassword = cryptoUtils.saltHashPassword,
    sha512 = cryptoUtils.sha512;

exports.authenticate = (req, res) => {
    const { email, password } = req.body;
    Users.findByEmail(email, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) {
            console.log('Authentication failed. User not found.');
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {
            const { passwordHash, salt } = user;
            const enteredPassHash = sha512(password, salt);
            if (user.passwordHash !== enteredPassHash) {
                console.log('Authentication failed. Wrong password.')
                res.json({ 
                    success: false, 
                    message: 'Authentication failed. Wrong password.'
                 });
            } else {
                const payload = {
                    userID: user['_id']
                };

                const token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn : 60 * 60 * 24
                });

                res.cookie('token', token, { httpOnly: true });
                const { username, email } = user;

                res.json({
                    success: true,
                    username,
                    email
                });
            }
        }
    });
}

exports.registrate = (req, res) => {
    const { username, email, password } = req.body;
    const { passwordHash, salt } = saltHashPassword(password);
    Users.findByEmail(email, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (result) {
            return res.json({
                succcess: false,
                message: 'User with this email already exists'
            });
        }
        Users.create({username, email, passwordHash, salt}, (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            return res.json({
                succcess: true,
                username,
                email
            });
        });
    });
}