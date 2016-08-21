
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ParkReviewSchema  = new Schema({
 id: Number,
 name: String,
 size: Number, 
 rating: Number,
 saftey: Number,
 description: String
},
{collection : "parkreviews"});

module.exports = mongoose.model('ParkReview', ParkReviewSchema);