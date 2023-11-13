const express = require('express');
const app = express();
const morgan = require('morgan');

const Routes = require('./routes/index');

app.use(express.json());
app.use(morgan('dev'));

app.listen(3000, () => {
  console.log('Sever is running in port 3000');
});

app.use('/api', Routes);
