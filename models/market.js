const mongoose = require('mongoose');

var market = mongoose.model('market', {
    downloadby: { type: String },
    product: { type: String },
    productby: { type: String },
    internal: { 
        title: { type: String },
        price: { type: String },
        username: { type: String },
    },
    external: {
        price: { type: String },
        user: { type: String },
    },
    date: { type: Date, default: Date.now },
});
module.exports = { market };