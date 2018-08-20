const express = require('express');
const router = express.Router();
const photoModel = require('../../model/photo');
const multer = require('multer');
const crypto = require('crypto');
var mime = require('mime-types');
const currentDate = new Date();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'client/public/uploads/');
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
        });
    }
});
const upload = multer({ storage: storage });
router.post('/api/newphoto', upload.single('file'), function (req, res) {
    // console.log(req.file);
    if (req.file) {
        photoModel.create({
            description: req.body.description,
            image: req.file.filename,
            date: currentDate
        }, (err, data) => {
            res.json(data);
        })
    }
});

router.get('/api/showphotos', function (req, res) {
    photoModel.find({}, function (err, data) {
        res.json(data);
    })
})

router.get('/api/getphoto/:id', function (req, res) {
    photoModel.findById(req.params.id, function (err, data) {
        res.json(data);
    })
})

// router.get('/a', function (req, res) {
//     res.json('AAAA');
// });


module.exports = router;