
/**
 * Module dependencies.
 */

var express = require('express')
var mongoose = require('mongoose')
var app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// arquivos estaticos (html, css e etc..)
app.use(express.static(__dirname + '/public'));

app.get('/cadastrar', function(req, res){
	res.send('olá mundo');
});

app.listen(3000, function(){
});