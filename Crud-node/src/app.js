const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoute'); 

const app = express();
app.use(express.json());
app.use(cors()); 

const PORT = process.env.PORT || 4000;

// mongoose.connect('mongodb://localhost:27017/crud-operation/newUsers', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("Error connecting to MongoDB:", err));
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/crud-operation"; // Default to local DB

mongoose.connect(MONGO_URI, {  // ✅ Correct way to connect
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API Routes
app.use("/api/user", userRouter); // This is using userRouter.js correctly
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
