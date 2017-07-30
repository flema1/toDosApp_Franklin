const express = require('express');
const todoRoutes = express.Router();

const todosController = require('../controllers/todo-controller');


todoRoutes.get('/saturday', (req, res) => {
  res.send('Yea, its Saturday!');
 });

todoRoutes.post('/', todosController.create); 


todoRoutes.get('/add', (req, res) => {
  res.render('todo/todo-add');
});



todoRoutes.get('/all', todosController.index);

todoRoutes.get('/:id/edit', todosController.edit);

todoRoutes.put('/:id', todosController.update);


todoRoutes.get('/:id', todosController.show);
todoRoutes.delete('/:id', todosController.delete);

 
module.exports = todoRoutes;