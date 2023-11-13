const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TodoList = mongoose.model('Todo_List', todoListSchema);

module.exports = TodoList;
