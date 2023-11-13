const User = require('../../models/scheme/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  try {
    const { fullname, username, password, email } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const newUser = await User.create({
      fullname,
      username,
      password: hashedPassword,
      email,
    });

    // Buat token untuk user yang baru terdaftar
    const token = jwt.sign({ userId: newUser.id }, 'dick-mullen-the-best', {
      expiresIn: '1h',
    });

    // Kirim response dengan token
    res.status(201).json({
      id: newUser.id,
      fullname: newUser.fullname,
      username: newUser.username,
      email: newUser.email,
      access_token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
}

module.exports = {
  register,
};
