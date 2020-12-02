const mongoose = require('mongoose');

var Review = mongoose.model('Review', {
    product: { type: String },
    username: { type: String },
    rating: { type: String },
    user: { type: String },
    comment: { type: String },
    report: {
        title: { type: String },
        report: { type: String },
    }
});
module.exports = { Review };