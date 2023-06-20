const { adminAuthenticate } = require('../middleware/JWT/authenticate');
// const { userAuthenticate } = require('../middleware/JWT/authenticate');

function category_route(app) {
    const category_controller = require('../controllers/category_controller');
    

    app.get('/categories', category_controller.allCategory);
    app.get('/category/:id', category_controller.categoryById);
    app.post('/addcat',  category_controller.createCategory);
    app.delete('/deletecat/:id', adminAuthenticate, category_controller.deleteCategory);
    app.put('/editcat/:id',adminAuthenticate, category_controller.updateCategory)

}

module.exports = { category_route };