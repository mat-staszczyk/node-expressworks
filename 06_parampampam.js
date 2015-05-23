express = require('express');
app = express();

app.put('/message/:ID', function (req, res) {
	var id = req.params.ID;
	var r = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	res.end(r);
});

app.listen(process.argv[2]);