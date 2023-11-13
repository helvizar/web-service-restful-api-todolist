const express = require('express');
const router = express.Router();

// Controller untuk todo
const todoController = require('../../controllers/todo/TodoController');

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.delete('/todos', todoController.deleteAllTodos);

module.exports = router;
