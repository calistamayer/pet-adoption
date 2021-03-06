const jwt = require('jsonwebtoken');
// set token secret and expiration time
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for authenticating jwt
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    
    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }
    // if no token, return request object as is
    if (!token) {
      return req;
    }
    // verify token and get user data from it. Check for secret match
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    
    } catch {
      console.log('Invalid token');
    }
    // return updated request object
    return req;
  },
  // expects user object and adds into to token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};