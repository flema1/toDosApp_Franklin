const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express()

app.use(logger('dev'));


app.get('/', function (req, res) {
  res.send('Hello Franklin!')
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

app.get('/toDos', (req, res) => {
  res.send('Info about toDos!');
});



app.get('*', (req, res) => {
    const err = new Error('not found!');
    res.status(404).send(err);
});