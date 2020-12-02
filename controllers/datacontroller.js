const express = require ('express');
var router = express.Router();
var multer = require('multer')
var {Product} = require('../models/data');
var ObjectId = require('mongoose').Types.ObjectId;
const https = require('https')



var upload = multer({
  storage: multer.diskStorage({

    destination: function (req, file, callback) { callback(null, './uploads'); },
    filename: function (req, file, callback) {
      callback(null, (file.originalname));
    }

  })
})


router.get('/', (req, res) => {
  Product.find ((err, docs) => {
       if (!err) {res.send(docs);}
       else {console.log ('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
     }) .sort({_id: -1})
});


const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/verify/:reference',
  method: 'GET',
  headers: {
    Authorization: 'sk_test_e5bc3eec9ca0a0e7755ea04a753d34fc4ccb08df'
  }
}
https.request(options, res => {
  let data = ''
  resp.on('data', (chunk) => {
    data += chunk
  });
  resp.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

router.post('/', upload.single('file'), (req, res) => {
  const today = new Date()
  var pro = new Product({
    file: req.file.path,
    title : req.body.title,
    price : req.body.price,
    description: req.body.description,
    user: req.query.user,
    categories: req.body.categories,
    tags: req.body.tags,
    feature: req.body.feature,
    software: req.body.software,
    version: req.body.version,
    materials: req.body.materials,
    username: req.query.username,
    created: today,
    rating: req.query.rating,
    deletedd: {
      created: today,
    }
  });
  pro.save ((err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send(`no record with given id: ${req.params.id}`)

  Product.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/1/:user', (req, res) => {
  Product.find({user: req.params.user }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/category/:categories', (req, res) => {
  Product.find({ categories: req.params.categories }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/2/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('no record with given id: $(req.params.id)')

  Product.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
  });
});


module.exports = router;