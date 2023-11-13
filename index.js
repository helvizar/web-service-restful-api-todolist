const express = require('express');
const app = express();
const morgan = require('morgan');

const DBConnection = require('./models/DBConnection');

// Import routes
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/auth/login');
const registerRoutes = require('./routes/auth/register');
const todoRoutes = require('./routes/todo/todo');

// Middleware setup
app.use(express.json());
app.use(morgan('dev'));

// Route setup
app.use('/', indexRoutes, todoRoutes);
app.use('/auth', loginRoutes, registerRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

DBConnection();
