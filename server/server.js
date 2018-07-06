var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var books = [
  {
    id: 1,
    title: 'myBook',
    author: 'moi',
    publicationDate: '12/05/2018',
    nbPret: 5,
  },
  {
    id: 2,
    title: 'myBook2',
    author: 'moimeme',
    publicationDate: '12/05/2018',
    nbPret: 5,
  },
  {
    id: 3,
    title: 'myBook3',
    author: 'moiaussi',
    publicationDate: '12/05/2018',
    nbPret: 5,
  },

]




// Middlewares
app.use(bodyParser.json()); // le body des requêtes sont parsées (json -> js)
//app.use(express.static('public'));

// Permet les requêtes cross-domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes

// get
app.get('/teams', (req, res) => res.json(teams));

app.get('/books', (req, res) => res.json(books));
app.get('/authors', (req, res) => res.json(authors));
app.get('/books/:id', (req, res) => {
  let id = req.params.id;
  for (let i=0; i<books.length; i++) {
    if (books[i].id == id) {
      return res.json(books[i])
    }
  }
  res.status(404).send('book inconnu');
});






// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
