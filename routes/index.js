const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('This is Express server!');
});

module.exports = routes;
