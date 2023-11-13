const Joi = require('joi');
const UserModel = require('../models/scheme/User');

// Middleware untuk validasi body pada saat register
async function validateRegisterBody(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    fullname: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Cek apakah username sudah terdaftar
  const existingUsername = await UserModel.findOne({
    username: req.body.username,
  });
  if (existingUsername) {
    return res.status(400).json({ message: 'Username already registered' });
  }

  // Cek apakah email sudah terdaftar
  const existingEmail = await UserModel.findOne({ email: req.body.email });
  if (existingEmail) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  next();
}

module.exports = {
  validateRegisterBody,
};
