const db= require ('../db/config');

const Todo = {};
Todo.findAll = () => {
    console.log ("here                       here ");
  return db.query('SELECT * FROM todos');
}



module.exports = Todo;