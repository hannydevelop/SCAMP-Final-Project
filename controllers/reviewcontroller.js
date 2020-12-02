const express = require('express');
var router = express.Router();
var multer = require('multer')
var {Review} = require('../models/review');
var ObjectId = require('mongoose').Types.ObjectId;



router.get('/', (req, res) => {
    Review.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    }).sort({ _id: -1 })
});

router.post('/', (req, res) => {
    var rev = new Review({
        product: req.query.product,
        username: req.query.username,
        rating: req.body.rating,
        user: req.query.user,
        comment: req.body.comment,
        report: {
            title: req.body.title,
            report: req.body.report,
        }
    });
    rev.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id: ${req.params.id}`)

    Review.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/1/:product', (req, res) => {
    Review.find({ product: req.params.product }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;