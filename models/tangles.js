var mongoose = require('mongoose'),
    TangleSchema = new mongoose.Schema({
        title    : { type: String, required: true },
        location : { type: Array },
        date     : { type:Date, default: Date.now },
        feed     : { type: String }
    });

module.exports = mongoose.model('Tangle', TangleSchema);
