const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../config/server_config');
const UnauthorizedError = require('../errors/unauthorized_error');

function generateJWT(payload) {
    console.log("called actual method")
    return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRY})
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch(error) {
        throw new UnauthorizedError();
    }
}


module.exports = {
    generateJWT,
    verifyToken
}