// src/models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

module.exports = mongoose.model('Task', TaskSchema);
