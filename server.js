var express = require('express');
var	app		= express();
var path = require('path');
var port = process.env.PORT || 8080;
var	client = require('twilio')('AC9bb73ecdcf906e633e1cc2a14500b329','3d0b41afc1c183a59f8d674901956f27');

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, 'client', 'views'));

app.listen(port, function(){
	console.log('I\'m Listening on ...' + port);
});


app.get('/twilio.ejs', function(req, res){
	client.sendMessage({
		to: '+15084107028',
		from: '+15087147358',
		body: 'Hello, How are you today?'
	}, function(err, data){
		if(err)
			console.log(err);
		console.log(data);
	});
});