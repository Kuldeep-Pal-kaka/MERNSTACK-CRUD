const User = require('../models/userSchema');  // Make sure this path is correct

class UserServices {
  // Function to create a user
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
  }

  // Function to get all users
  async getAllUsers() {
    return await User.find();  // Fetch all users from the database
  }


  async getUserById(userId){
     return await User.findById(userId);
  }

  async updateUser(userId, updatedData) {
    return await User.findByIdAndUpdate(
      userId,
      { $set: updatedData }, // Ensure only updated fields are modified
      { new: true, runValidators: true } // Return updated user & validate schema
    );
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
  
  

};

// Make sure you're exporting the instance correctly
module.exports = new UserServices();
