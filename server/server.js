const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("🚀 Online Learning Platform API Running");
});

app.get("/api/stats", (req, res) => {
  res.json({
    students: 12000,
    courses: 120,
    completion: "89%",
    aiScore: "96%",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});