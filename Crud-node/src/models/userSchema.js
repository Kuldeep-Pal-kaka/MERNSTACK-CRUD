const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Ensures exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
