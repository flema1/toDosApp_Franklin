const express = require('express');
const todoRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const todosController = require('../controllers/todo-controller');

todoRoutes.get('/all',authHelpers.loginRequired,  todosController.index);
todoRoutes.post('/',authHelpers.loginRequired, todosController.create); 
todoRoutes.get('/add',authHelpers.loginRequired, (req, res) => {
  // console.log ("  render                           render");
  res.render('todo/todo-add');
 //res.render('auth/login');
});
todoRoutes.get('/:id', todosController.show);
todoRoutes.get('/:id/edit',authHelpers.loginRequired, todosController.edit);
todoRoutes.put('/:id',authHelpers.loginRequired, todosController.update);
todoRoutes.delete('/:id',authHelpers.loginRequired, todosController.delete);

module.exports = todoRoutes;