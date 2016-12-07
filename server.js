var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
//our db name is journey
mongoose.connect('mongodb://localhost/journey');
var Message = require("./journeyModel.js");
console.log(Message);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.post('/journey',function(req,res){
	console.log('am I getting here');
	var message = new Message(req.body);
	message.save();
	res.send('success!');
})
app.get('/getAll',function(req,res){

	Message.find(function(err,messages){
		console.log('hello from the find');
		console.log(messages);
		res.send(messages);

	})
	

})

app.listen(8000);