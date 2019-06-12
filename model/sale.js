
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var saleSchema = new Schema ({
    category: String,
    source: String,
    description: String,
    timestamp: String
});

var Sale = mongoose.model('Sale', saleSchema );

module.exports = Sale;