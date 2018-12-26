const Users = require('../models/users'),
    jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    Users.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        return res.sendStatus(200);
    });
}

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

                res.json({
                    success: true,
                    token: token
                });
            }
        }
    });
}