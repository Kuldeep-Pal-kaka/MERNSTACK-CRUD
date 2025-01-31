const userServices = require('../services/userServices');

class UserController {

  async createUser(req , res) {
    try{
      const {name , email , phone} = req.body;
      console.log(req.body)
      const saveUser = await userServices.createUser(name , email , phone);
      res.json(saveUser);
    } catch (error) {

     res.status(500).json({error: error.message});
      
    }
  }

async getAllUsers(req , res ){
  try {
    const users = await userServices.getAllUsers();
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
}


async getUsersById(req , res){
  const userId = req.params.id;
try {
 const user = await userServices.getUserById(userId);
if (!user) {
  return res.status(404).json({error: "user not found"});
}else{
  res.json(user);
}
} catch (error) {
  res.status(500).json({error: error.message});
}
}

async updateUser(req, res) {
  const userId = req.params.id;
  console.log(userId);
  
  const updatedData = req.body;

  try {
    // Corrected method: Use updateUser instead of getUserById
    const updatedUser = await userServices.updateUser(userId, updatedData);
console.log(updatedData);

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


};

module.exports = new UserController();