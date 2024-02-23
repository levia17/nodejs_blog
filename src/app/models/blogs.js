const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = new Schema({
  title: { type: String, default: "none" },
  description: { type: String, default: "none" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('blog', Blog);
