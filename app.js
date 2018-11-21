const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();

//port ecouter
app.listen(3000);

//configuration globale
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.png')));

app.get('/', function (req, reponse) {
    reponse.render('index');
})

app.get('/contact', function (req, reponse) {
    reponse.render('contact');
})
.post('/contact', function (req, reponse) {
    console.log("mon param du form: " + req.body.title)
    reponse.redirect('/contact');
})
;





//default if isset page
app.use(function (req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.send(404, 'Lost!');
});