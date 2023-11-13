const express = require('express');
const router = express.Router();

// Controller untuk login
const loginController = require('../../controllers/auth/LoginController');

router.post('/login', loginController.login);

module.exports = router;
