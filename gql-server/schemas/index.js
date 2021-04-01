const graphql = require('graphql')
const { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql

const TodoType = require('./TodoType')
let todoData = require('../MOCK_DATA.json')

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllTodos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return todoData
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createTodo: {
      type: TodoType,
      args: {
        userId: {type: GraphQLInt},
        // id: {type: GraphQLInt},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
      },
      resolve(parent, args) {
        todoData.push({id: todoData.length + 1, userId: args.userId, title: args.title, body: args.body}) 
        return {...args, id: todoData.length}
      }
    },
    
    deleteTodo: {
      type: new GraphQLList(TodoType),
      args: {
        userId: {type: GraphQLInt}
      },
      resolve(parent, args) {
        todoData = todoData.filter((todo, idx) => todo.userId !== args.userId)
        return todoData
      }
    }
  }
})

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation})

module.exports = schema