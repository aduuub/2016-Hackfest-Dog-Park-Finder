
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ParkReviewSchema  = new Schema({
 id: Number,
 name: String,
 dogSize: Number, 
 rating: Number,
 safety: Number,
 description: String
},
{collection : "parkreviews"});

module.exports = mongoose.model('ParkReview', ParkReviewSchema);