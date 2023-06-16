const { adminAuthenticate } = require('../middleware/JWT/authenticate');
const { userAuthenticate } = require('../middleware/JWT/authenticate');
const multerMid = require('../middleware/multer/file')

function product_route(app) {
    const product_controller = require('../controllers/product_controller');

    app.get('/products', product_controller.allProducts);
    app.get('/product/:id', product_controller.productById);
    app.get('/product/cat/:id', product_controller.productByCategory);
    app.post('/addproduct', multerMid.single('image'), product_controller.createProduct );
    app.put('/updateproducy/:id', multerMid.single('image'), product_controller.updateProduct);
    app.put('/downloade/:id', userAuthenticate, product_controller.downloadCount)
    app.delete('/deleteproduct/id',adminAuthenticate, product_controller.deleteProduct);

}

module.exports = { product_route };