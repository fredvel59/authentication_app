const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dvtlhph0g',
  api_key: "784957987551196",
  api_secret: 'GmCLmDlAwss6kVGBm1N-PFcNzyM',
  secure: true
})

module.exports = cloudinary;