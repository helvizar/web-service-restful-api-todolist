const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/auth/RegisterController');
const registerValidationMiddleware = require('../../middlewares/registerValidationMiddleware');

router.post(
  '/register',
  registerValidationMiddleware.validateRegisterBody,
  registerController.register
);

module.exports = router;
