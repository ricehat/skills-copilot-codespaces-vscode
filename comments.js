// create web server
// 1. load modules
var express = require('express');
var bodyParser = require('body-parser');

// 2. create app
var app = express();

// 3. set middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4. set routing
var comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Jane', message: 'World' }
];

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { comments: comments });
});

app.get('/new', function(req, res) {
  res.render('new');
});

app.post('/create', function(req, res) {
  var name = req.body.name;
  var message = req.body.message;
  comments.push({ name: name, message: message });
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Server is running at localhost:3000');
});