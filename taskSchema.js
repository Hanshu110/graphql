// src/schema/taskSchema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const Task = require('../models/Task');
const taskResolvers = require('../resolvers/taskResolvers');

// Task Type Definition
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve: taskResolvers.getTaskById
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: taskResolvers.getAllTasks
    }
  }
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTask: {
      type: TaskType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString }
      },
      resolve: taskResolvers.addTask
    },
    updateTask: {
      type: TaskType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString }
      },
      resolve: taskResolvers.updateTask
    },
    deleteTask: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve: taskResolvers.deleteTask
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
