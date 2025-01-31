const express = require('express')
const userController = require('../controller/userController');
const router = express.Router();

router.post('/', userController.createUser);

router.get('/' , userController.getAllUsers);

router.get("/:id", userController.getUsersById);

router.patch('/update/:id', userController.updateUser);

module.exports = router;


// const express = require("express");
// const router = express.Router();

// // Sample User Route (POST)
// router.post("/", (req, res) => {
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     return res.status(400).json({ error: "All fields are required" });
//   }
  
//   // You can save user data to the database here
//   res.status(201).json({ message: "User created successfully", user: req.body });
// });

// // Export router
// module.exports = router;
