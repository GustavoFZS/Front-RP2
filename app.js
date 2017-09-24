
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

app.get('/login', function (req, res) {
   	.sendfile('/views/login.html');
});

app.get('/login', function (req, res) {
   	.sendfile('/views/cadastrar.html');
});


app.listen(8080, function(){
});