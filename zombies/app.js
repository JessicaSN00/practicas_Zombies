var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'views'));
app.get('/',(request, response) => response.render('index'));

app.get('/clases', function (request, response){response.render('clases')});
app.get('/armas', function (request, response){response.render('armas')});
app.get('/404', function(request, response){response.render('404')});

app.get('/victimas', function(request, response){
    var ip = ['1623137'];
    var ip_user = request.connection.remoteAddress;
    if(ip.indexOf(ip_user) >= 0){
        response.render("404");
        console.log(ip_user);
    }
    else{
        response.render("victimas");
        console.log(ip_user);
    }
});

http.createServer(app).listen(3000);