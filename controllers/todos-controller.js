const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
    .then(todos => {
      res.render('todo/todo-index', {
        message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};



module.exports = todoController;
