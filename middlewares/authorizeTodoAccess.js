const JWT = require('jsonwebtoken');

const authorizeTodoAccess = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({
      message: 'Unauthorized! Missing authorization header.',
      statusMessage: 'Unauthorized!',
      statusCode: 401,
    });
  } else {
    let token = req.headers.authorization.split(' ');
    if (token[0].toLowerCase() !== 'bearer') {
      return res.status(401).send({
        message: 'Unauthorized! Invalid token format.',
        statusMessage: 'Unauthorized!',
        statusCode: 401,
      });
    } else {
      try {
        let tokenVerify = JWT.verify(token[1], 'dick-mullen-the-best');
        if (!tokenVerify) {
          return res.status(401).send({
            message: 'Unauthorized! Invalid token.',
            statusMessage: 'Unauthorized!',
            statusCode: 401,
          });
        } else {
          req.tokenUser = tokenVerify;
          next();
        }
      } catch (error) {
        return res.status(401).send({
          message: 'Unauthorized! Failed to verify token.',
          statusMessage: 'Unauthorized!',
          statusCode: 401,
        });
      }
    }
  }
};

module.exports = {
  authorizeTodoAccess,
};
