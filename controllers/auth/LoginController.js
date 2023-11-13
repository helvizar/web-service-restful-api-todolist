const User = require('../../models/scheme/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Cari user berdasarkan username
    const user = await User.findOne({ username });

    // Jika user tidak ditemukan atau password tidak sesuai, kirim respons error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Buat token untuk user yang berhasil login
    const token = jwt.sign({ userId: user.id }, 'dick-mullen-the-best', {
      expiresIn: '1h',
    });

    // Kirim response dengan token
    res.json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      access_token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
}

module.exports = {
  login,
};
