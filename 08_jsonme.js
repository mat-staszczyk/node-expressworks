var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function (req, res) {
	fs.readFile(process.argv[3], 'utf-8', function(err, data) {
		if (!err) {
			var obj = JSON.parse(data);
			res.json(obj);
			} else {
			console.log("Error");
		}
	});
});

app.listen(process.argv[2]);