// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var ParkReview = require('./models/ParkReview');
var Park = require('./models/Park');

var mongoose  = require('mongoose');
mongoose.connect('mongodb://woof_pack:woofpack@ds147995.mlab.com:47995/walk_in_the_park'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     // res.json({ message: 'hooray! welcome to our api!' });   
// });

//method to create a new park review
router.route('/parkReview')
.post(function(req,res){
	var parkReview  = new ParkReview();
	parkReview.name = req.body.name;
	parkReview.size = req.body.size;
	parkReview.rating = req.body.rating;
	parkReview.saftey = req.body.saftey;
	parkReview.description = req.body.description;
	parkReview.save().then(function(newReview){
		res.json(newReview);
	}).then(null, function(err){
		res.send("Error creating park review", err);
	});
});

// more routes for our API will happen here
router.route('/parks')
.get(function(req,res){
	Park.find(function(err, parks){
		if(err){
			res.send("Error getting parks",err);
		}
		res.json(parks);
	});
});

router.route('/parkReview')
.get(function(req,res){
	ParkReview.findById(req.params.parkReview_id, function(err, parkReview){
		if(err){
			console.log("Error", err);
			res.send("Error", err);
		}
		res.json(parkReview);
	});
});

router.route('/parkReview')
.get(function(req,res){

	ParkReview.find(function(err, parkReview){
		if(err){
			res.send("Error getting park review",err);
		}
		res.json(review);
	});
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);