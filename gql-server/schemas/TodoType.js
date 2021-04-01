const graphql = require('graphql')
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: {type: GraphQLInt},
    userId: {type: GraphQLInt},
    title: {type: GraphQLString},
    body: {type: GraphQLString},
  })
})

module.exports = TodoType