const Joi = require('joi');

// Middleware untuk validasi body pada saat login
function validateLoginBody(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}

module.exports = {
  validateLoginBody,
};
