const { Router } = require('express');
const multerMid = require('../middleware/multer/file')

const router = Router()

router.post('/upload', multerMid.single('image'),(req, res) => {
    try {
        if(req.file) {
            res.json(req.file)
        }
    } catch (err) {
        console.log(eror);
    }
} )

module.exports = router