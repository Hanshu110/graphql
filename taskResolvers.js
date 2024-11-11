// src/resolvers/taskResolvers.js
const Task = require('../models/Task');

module.exports = {
  getTaskById: async (parent, args) => {
    return await Task.findById(args.id);
  },
  getAllTasks: async () => {
    return await Task.find();
  },
  addTask: async (parent, args) => {
    const task = new Task({
      title: args.title,
      description: args.description,
      status: args.status
    });
    return await task.save();
  },
  updateTask: async (parent, args) => {
    return await Task.findByIdAndUpdate(
      args.id,
      {
        title: args.title,
        description: args.description,
        status: args.status
      },
      { new: true }
    );
  },
  deleteTask: async (parent, args) => {
    return await Task.findByIdAndDelete(args.id);
  }
};
