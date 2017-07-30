const express = require('express');
const logger = require('morgan');
const path = require('path');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express()

app.use(logger('dev'));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello world we are aalive!',
  });
});


/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT} 00`);
});

app.get('/todos', (req, res) => {
  res.send('Info about toDos!');
});

//additional routes
 const todoRoutes = require('./routes/todo-routes');
 app.use('/todos', todoRoutes);



app.get('*', (req, res) => {
    const err = new Error('not found!');
    res.status(404).send(err);
});