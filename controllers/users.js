const Users = require('../models/users'),
    saltHashPassword = require('../utils/cryptoUtils'),
    jwt = require('jsonwebtoken');

exports.authenticate = (req, res) => {
    const { name, password } = req.body;
    Users.findByName({ name }, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {

            if (user.password !== password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                const payload = {
                    admin: user.admin
                };

                const token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn : 60 * 60 * 24
                });

                console.log(token)

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