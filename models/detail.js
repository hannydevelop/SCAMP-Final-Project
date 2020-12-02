const mongoose = require('mongoose');

var detail = mongoose.model('detail', {
    personalDetails: { type: String },
    review: { type: String },
    file: { type: String },
    qualification: { type: String },
    user: { type: String },
    username: { type: String },
});
module.exports = { detail };