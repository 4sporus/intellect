var MongoClient = require('mongodb').MongoClient;
var express    = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))

// Connect to the db


app.post('/save',function(req,res) {
	console.log("start");
	
	MongoClient.connect("mongodb://test:test@ds147799.mlab.com:47799/snow_nodejs_mongo_test", function(err, db) {
  if(!err) {
    console.log("mongodb is connected");
	
	console.log("else statement");
	console.log("req id-->"+req);
	console.log("req id-->"+JSON.stringify(req));
	
	
	res.send('success')
  }
  
	});
		

	
});
app.listen(3000);