const express = require('express');
const todoRoutes = express.Router();

const todosController = require('../controllers/todos-controller');


todoRoutes.get('/saturday', (req, res) => {
  res.send('Yea, its Saturday!');
});


todoRoutes.get('/all', todosController.index);

 
module.exports = todoRoutes;