const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is Express server!');
});

module.exports = router;
