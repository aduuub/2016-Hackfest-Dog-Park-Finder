
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ParkSchema  = new Schema({
 FID: Number,
 objectid: Number,
 road_front: String,
 suburb: String,
 lat: Number,
 long: Number,
 on_off: String,
 on_off_details: String,
 globalID: String
},
{collection : "dogparks"});

module.exports = mongoose.model('Park', ParkSchema);