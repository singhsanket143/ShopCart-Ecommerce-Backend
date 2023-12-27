const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../config/server_config');

function generateJWT(payload) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRY})
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    generateJWT
}