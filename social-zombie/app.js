var express = require('express');
<<<<<<< HEAD
var mongoose = require ('mongoose');

var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require ('connect-flash');
var passport = require('passport');

var routes = require('./routes');
var passportsetup = require('./passportsetup');
var app = express();
 
app.use(express.static(path.resolve(__dirname, 'public')));

mongoose.connect("mongodb://localhost:27017/zombie_nest");

passportsetup();

app.set("port", process.env.PORT || 3000);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: "MonstruosoMonstruosityMonstruosidad",
    resave: true,
    saveUnitialized: true
}));

app.use(flash());

app.use(passport.initialize({
    userProperty:"zombie"
}));

app.use(passport.session());

app.use(routes);

app.listen(app.get("port"), () => {
    console.log("La aplicación inició por el puerto: " + app.get("port"));
});
=======
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
    var ip = ['::1'];
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
>>>>>>> 6fd834a8e92e81da3b07a99b91f3fc154b5bfc92
