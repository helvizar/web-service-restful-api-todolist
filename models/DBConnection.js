const mongoose = require('mongoose');

const url = 'mongodb+srv://helvizar:helvizar@cluster0.hmyhrob.mongodb.net/';
const ConnectionDB = async () => {
  try {
    const Connect = await mongoose.connect(url);
    console.log(`Mongo Connected to: ${Connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectionDB;
