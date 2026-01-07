const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Backend server is running successfully!");
});

// ✅ Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
