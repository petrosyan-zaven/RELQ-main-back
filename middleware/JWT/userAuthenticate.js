const JWT = require('jsonwebtoken');
require('dotenv').config();

 const SECRET = process.env.SECRET;

 function userAuthenticate(req, res, next) {
    // const token = req.headers.authorization.split(' ')[1];
    const token = req.headers.authorization
    const {id} = req.params;

    if ( token == null) {
        return res.sendStatus(401)
    }

    JWT.verify(token, SECRET, ( err, user ) => {
        if (err) {
            return res.sendStatus(401)
        }
        console.log(user.id);
        console.log(id);

        if( user.id == id ) {
            next()
        }
    })
 }

 module.exports = { userAuthenticate }