const express = require ('express');
var router = express.Router();

var {cart} = require('../models/cart');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
  cart.find ((err, docs) => {
       if (!err) {res.send(docs);}
       else {console.log ('Error in retrieving datas:' + JSON.stringify(err, undefined, 2)); }
     }) .sort({_id: -1})
});

router.post('/', (req, res) => {
  var cat = new cart ({
    title : req.body.title,
    price: req.body.price,
    user: req.body.user,
    description: req.body.description,
    file: req.body.file,
    quantity: req.body.quantity,
  });
  cat.save ((err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in saving to cart:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send('no record with given id: $(req.params.id)')

  cart.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in retrieving data:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/1/:user', (req, res) => {
  cart.find({ user: req.params.user }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/2/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send('no record with given id: $(req.params.id)')
  
  cart.findByIdAndRemove(req.params.id , (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;