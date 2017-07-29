const express = require('express');
const todoRoutes = express.Router();

todoRoutes.get('/saturday', (req, res) => {
  res.send('Yea, its Saturday!');
});
 
module.exports = todoRoutes;