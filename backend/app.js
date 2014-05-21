var express = require('express');
var app = express();
var exec = require('child_process').exec;
var child;
var fs = require('fs');

app.get('/render_image', function(req, res){

	var command = './node_modules/.bin/phantomjs render-panel.js ';
	var params = 'url=http://localhost:5601/#/' + req.params.url + 'png=test.png';

	child = exec(command + params,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }

	    fs.readFile('test.png', function(err, data) {
			  if (err) throw err; // Fail if the file can't be read.

		    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
		    res.end(data);
			});
	});

});

app.listen(3000);