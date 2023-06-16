const { adminAuthenticate } = require('../middleware/JWT/authenticate');
const { userAuthenticate } = require('../middleware/JWT/authenticate');
const multerMid = require('../middleware/multer/file')


function user_route(app) {
    const user_controller = require('../controllers/user_controller');
    const register_controller = require('../controllers/register_controller');



    app.post('/register',multerMid.single('image'), register_controller.register);
    app.post('/login', register_controller.login);
    app.get('/allusers', adminAuthenticate, user_controller.allUsers);
    app.get('/user/:id', adminAuthenticate, user_controller.userById);

    app.put('/updateUser/:id', userAuthenticate, user_controller.updateUser);
    app.delete('/deleteuser/:id', userAuthenticate, user_controller.deleteUser);

}

module.exports = { user_route };
