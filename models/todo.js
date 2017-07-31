const db= require ('../db/config');

const Todo = {};

Todo.findAll = () => {
  //  console.log ("here                       here ");
  return db.query('SELECT * FROM todos');
}

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
  `, [id]);
}

Todo.create = (todo) => {
   // console.log ("create                       create");
  return db.one(`
    INSERT INTO todos
    (title, category, status)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [todo.title, todo.category, todo.status]);
};

Todo.update = (todo, id) => {
/*  console.log ("update             "+todo.title+"      update");
    console.log ("update             "+todo.category+"      update");
    console.log ("update             "+todo.status+"      update");
    console.log ("update             "+id+"      update");*/
  return db.one(`
     UPDATE todos SET
        title = ($1),
        category = ($2),
         status = ($3)
        WHERE id = $4
        RETURNING *
  `, [todo.title, todo.category, todo.status, id]);
}

Todo.delete= (id) => {
 //console.log ("delete                      delete");
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
  `, [id]);
};

module.exports = Todo;
