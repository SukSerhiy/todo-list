const Users = require('../models/users'),
    cryptoUtils = require('../utils/cryptoUtils'),
    jwt = require('jsonwebtoken'),
    saltHashPassword = cryptoUtils.saltHashPassword,
    sha512 = cryptoUtils.sha512;

exports.authenticate = (req, res) => {
    const { email, password } = req.body;
    Users.findByEmail({ email }, (err, user) => {
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
                    message: 'Authentication failed. Wrong password.',
                    over: 'sdfsdf'
                 });
            } else {
                console.log('Everything all right');
                const payload = {
                    admin: user.admin
                };

                const token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn : 60 * 60 * 24
                });

                res.setHeader('Set-Cookie', 'name=Serhii');

                res.json({
                    success: true,
                    token: token
                });
            }
        }
    });
}

exports.registrate = (req, res) => {
    const { email, password } = req.body;
    
    const { passwordHash, salt } = saltHashPassword(password);
    Users.create({email, passwordHash, salt}, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    });
}