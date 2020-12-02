const mongoose = require ('mongoose');

var Product = mongoose.model('Product', {
    file: {type: String},
    title : {type: String},
    price : {type: String},
    description: { type: String },
    user: { type: String },
    categories: { type: String },
    tags: { type: String },
    feature: { type: String },
    software: { type: String },
    version: { type: String },
    materials: { type: String },
    username: { type: String },
    date: { type: Date, default: Date.now },
    rating: { type: String },
    deletedd: {
        date: { type: Date, default: Date.now },
    }
});

module.exports = { Product };