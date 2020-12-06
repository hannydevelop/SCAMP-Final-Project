const mongoose = require ('mongoose');

var cart = mongoose.model ('cart', {
  title : {type: String},
  price : {type: String},
  user: { type: String },
  description: { type: String },
  file: { type: String },
  quantity: { type: Number},
    });
module.exports = { cart };