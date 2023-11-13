const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/auth/LoginController');
const loginValidationMiddleware = require('../../middlewares/loginValidationMiddleware');

router.post(
  '/login',
  loginValidationMiddleware.validateLoginBody,
  loginController.login
);

module.exports = router;
