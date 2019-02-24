const jwt = require('jsonwebtoken');

/**
 * Gets token from request cookies, decodes it and receives userID that is passed to the request 
 */
const ensureAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      }
      const { userID } = decoded;
      req.userID = userID;
      next();
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
};

module.exports = ensureAuthenticated;