const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    category: String,

    tags: [String],

    thumbnail: String,

    level: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Course",
  courseSchema
);
