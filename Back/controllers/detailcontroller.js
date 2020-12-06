const express = require('express');
var multer = require('multer')
var router = express.Router();

var { detail } = require('../models/detail');
var ObjectId = require('mongoose').Types.ObjectId;

var upload = multer({
    storage: multer.diskStorage({

        destination: function (req, file, callback) { callback(null, './uploads'); },
        filename: function (req, file, callback) {
            callback(null, (file.originalname));
        }

    })
})

router.get('/', (req, res) => {
    detail.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving datas:' + JSON.stringify(err, undefined, 2)); }
    }).sort({ _id: -1 })
});

router.post('/', upload.single('file'), (req, res) => {
    var det = new detail({
        personalDetails: req.body.personalDetails,
        review: req.body.Review,
        file: req.file.path,
        qualification: req.body.qualification,
        user: req.query.user,
        username: req.query.username,
    });
    det.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving to cart:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/1/:user', (req, res) => {
    detail.find({ user: req.params.user }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;