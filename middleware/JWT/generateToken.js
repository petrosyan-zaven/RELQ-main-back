const JWT = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;

function generateAccessToken(id, userName, role) {
    return JWT.sign( {id, userName, role }, SECRET, { expiresIn: '36000s' } )
}

module.exports = { generateAccessToken }