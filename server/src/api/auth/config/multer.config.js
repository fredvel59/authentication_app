const multer = require('multer');
const path = require('path');
const fs = require('fs-extra')

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      await fs.ensureDir(path.join(__dirname, '../images'))
      cb(null, path.join(__dirname, '../images'));
    } catch (err) {
      console.log(err);
    }
  },
  filename: (req, file, cb) => {
    const name = `${new Date().getTime()}${file.originalname}`
    cb(null, name)
  }
})

const upload = multer({
  storage
})

exports.uploadImageMiddleware = upload.single('photo');