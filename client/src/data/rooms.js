const express = require('express');
const router = express.Router();
const roomModel = require('../../model/room');
const currentDate = new Date();

router.post('/addroom', function (req, res) {
    roomModel.create(req.body, (err, data) => {
        res.json(1);
    })
});

router.get('/getrooms', function (req, res) {
    roomModel.find({}, function (err, data) {
        res.json(data);
    })
})

// router.get('/getroomdata', function (req, res) {
//     console.log(req.body.id);
//     roomModel.findById(req.body.id, function (err, data) {
//         res.json(data);
//     })
// })

module.exports = router;