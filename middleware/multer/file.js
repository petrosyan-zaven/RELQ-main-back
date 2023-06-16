// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination(req, res, cb) {
//         cb(null, 'image/')
//     },
//     filename(req, res, cb) {
//         cb(null, new Date().toISOString() + '-' + this.filename.originalname)
//     }
// })

// const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg'];

// const fileFilter = (req, res, cb) => {
//     if ( types.includes(storage.mimetype)) {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// // const images = multer({storage, fileFilter})

// module.exports = multer({storage, fileFilter})

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });

// const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg'];

// const fileFilter = (req, file, cb) => {
//   if (types.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// module.exports = upload;

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDirPath = path.join(__dirname, '../../', 'images');

    cb(null, uploadsDirPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

function filterFile (req, file, cb) {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage, filterFile });

module.exports = upload;