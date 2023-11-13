const Todo = require('../../models/scheme/TodoList');

async function createTodo(req, res) {
  try {
    const { userId, task } = req.body;

    // Buat todo baru dan simpan ke database
    const newTodo = await Todo.create({ userId, task });

    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create todo.' });
  }
}

async function getAllTodos(req, res) {
  try {
    // Get semua todo dari database
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve todos.' });
  }
}

async function getTodoById(req, res) {
  try {
    const { id } = req.params;
    const getDetailDataTodoList = await Todo.findOne({ _id: id });

    if (!getDetailDataTodoList) {
      res.status(404).json({
        message: 'Todo not found',
        statusText: 'Todo not found',
        statusCode: 404,
      });
    } else {
      res.json({
        message: 'Successfully to get detail data todo!',
        statusText: 'Successfully to get detail data todo!',
        statusCode: 200,
        data: getDetailDataTodoList,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'internal server error',
      statusText: 'Internal server error',
      statusCode: 500,
    });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const updateTodoListData = {
      task: task,
      updated_date: new Date(),
    };

    const updatedTodoList = await Todo.findByIdAndUpdate(
      id,
      updateTodoListData,
      { new: true }
    );

    if (!updatedTodoList) {
      res.status(404).json({
        message: 'Task not found',
        statusText: 'Task not found',
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: 'Successfully updated todo',
        statusText: 'Successfully updated todo',
        statusCode: 200,
        data: updatedTodoList,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
      statusText: 'Internal server error',
      statusCode: 500,
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const deleteTodoListData = await Todo.findByIdAndDelete(id);

    if (!deleteTodoListData) {
      res.status(404).json({
        message: 'Task not found',
        statusText: 'Task not found',
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: 'Successfully deleted todo',
        statusText: 'Successfully deleted todo',
        statusCode: 200,
        data: deleteTodoListData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
      statusText: 'Internal server error',
      statusCode: 500,
    });
  }
}

async function deleteAllTodos(req, res) {
  try {
    // Hapus semua todo dari database
    const deletedTodos = await Todo.deleteMany();

    res.json(deletedTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete todos.' });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
};
