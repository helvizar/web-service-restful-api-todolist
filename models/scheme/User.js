const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: { type: String },
    registered_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  this.id = this.username; // Ubah id jadi username
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
