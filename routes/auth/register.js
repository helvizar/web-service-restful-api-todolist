const express = require('express');
const router = express.Router();

// Controller untuk register
const registerController = require('../../controllers/auth/RegisterController');

router.post('/register', registerController.register);

module.exports = router;
