const express = require('express');
const app = express();
const morgan = require('morgan');

const Routes = require('./routes/index');
const DBConnection = require('./models/DBConnection');

app.use(express.json());
app.use(morgan('dev'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running in: ${port}`);
});

app.use('/api', Routes);

DBConnection();
