var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	giphy = require('giphy-api')('A9YSyW2HwtZWykxE6MKdEstpUPTlubgb');

// Setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', function(req, res) {
	giphy.trending({
		limit: 20
	}, function(err, response) {
		if (err) { console.log(err) }
		else {
			res.render("index", {data: response.data});
		}
	});
});

app.get('/search', function(req, res) {
	let val = req.query.search;
	giphy.search({
		q: val,
		limit: 20
	}, function(err, response) {
		if (err) { console.log(err) }
		else {
			res.send(response.data);
		}
	});
});

// port listening
app.listen(3594, function() {
	console.log('Magic is happening on port 3594');
});
