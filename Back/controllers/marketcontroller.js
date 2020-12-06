const express = require('express');
var router = express.Router();
var multer = require('multer')
var { market } = require('../models/market');
var ObjectId = require('mongoose').Types.ObjectId;



router.get('/', (req, res) => {
    market.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    })
});

router.post('/', (req, res) => {
    const today = new Date()
    var mark = new market({
        downloadby: req.query.downloadby,
        productby: req.query.productby,
        product: req.query.product,
        internal: {
            title: req.body.title,
            price: req.body.price,
            username: req.body.username,
        },
        report: {
            price: req.body.price,
            user: req.body.user,
        },
        created: today,
    });
    mark.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id: ${req.params.id}`)

    market.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/1/:downloadby', (req, res) => {
    market.find({ downloadby: req.params.downloadby }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/2/:productby', (req, res) => {
    market.find({ productby: req.params.productby }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;