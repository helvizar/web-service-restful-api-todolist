const express = require('express');
const router = express.Router();

// Controller untuk todo
const todoController = require('../../controllers/todo/TodoController');

// Middleware untuk autorisasi Todolist
const {
  authorizeTodoAccess,
} = require('../../middlewares/authorizeTodoAccess');

router.post('/todos', authorizeTodoAccess, todoController.createTodo);
router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.put('/todos/:id', authorizeTodoAccess, todoController.updateTodo);
router.delete('/todos/:id', authorizeTodoAccess, todoController.deleteTodo);
router.delete('/todos', authorizeTodoAccess, todoController.deleteAllTodos);

module.exports = router;
