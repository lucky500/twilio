var express = require('express');
var	app		= express();
var path = require('path');
var port = process.env.PORT || 8080;
var	client = require('twilio')('AC9bb73ecdcf906e633e1cc2a14500b329','3d0b41afc1c183a59f8d674901956f27');

/*app.get('/index', function(req, res){
	res.render('index.html');
});

app.set('views', __dirname + 'client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');*/

app.get('/',function(req,res){
       
     res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/testtwilio',function(req,res){
       
     res.sendFile(path.join(__dirname + '/testtwilio.html'));

});




app.listen(port, function(){
	console.log('I\'m Listening on ...' + port);
});


<<<<<<< HEAD
app.get('/testtwilio.html', function(req, res){
=======
app.get('/testTwilio', function(req, res){
>>>>>>> 1afbdb896d0933747d5e0fd76bc85314fc27e2ed
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
