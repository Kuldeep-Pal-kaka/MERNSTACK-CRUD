const mongoose = require('mongoose');

const connectedToMongoDB = async () => {
try{

  await mongoose.connect("mongodb://localhost:27017/crud_db")

}catch(error){
  console.log(`Mongoose not connected..:${error}`);
  
}
}

module.exports = {mongoose , connectedToMongoDB};