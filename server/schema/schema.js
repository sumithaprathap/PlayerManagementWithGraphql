const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

var players = [
  {
    id: '5c755ff9af458fde27863223',
    isActive: true,
    points: 52,
    name: 'Oneal Sims',
    team: 'yellow'
  },
  {
    id: '5c755ff9d107d51a8c59a816',
    isActive: false,
    points: 59,
    name: 'Maddox Craig',
    team: 'red'
  },
  {
    id: '5c755ff916257a510268b41a',
    isActive: false,
    points: 74,
    name: 'Santiago Gross',
    team: 'blue'
  },
  {
    id: '5c755ff9fe54cd6cb2f6f242',
    isActive: true,
    points: 69,
    name: 'Shannon Walter',
    team: 'green'
  },
  {
    id: '5c755ff9e51820789ff67f4e',
    isActive: true,
    points: 35,
    name: 'Brittney Guthrie',
    team: 'red'
  },
  {
    id: '5c755ff9d18102c8bd56adec',
    isActive: true,
    points: 53,
    name: 'Rich Mendez',
    team: 'green'
  },
  {
    id: '5c755ff92d3b4c2b92fc8be0',
    isActive: false,
    points: 63,
    name: 'Willa Gates',
    team: 'blue'
  },
  {
    id: '5c755ff9d587086d37843b0f',
    isActive: true,
    points: 43,
    name: 'Keith Baldwin',
    team: 'green'
  },
  {
    id: '5c755ff90eac67cba98a8e61',
    isActive: false,
    points: 33,
    name: 'Rosella Byers',
    team: 'yellow'
  },
  {
    id: '5c755ff9052432924b8fa9b6',
    isActive: false,
    points: 73,
    name: 'Debra Lambert',
    team: 'blue'
  },
  {
    id: '5c755ff9ab02a90e74e465ca',
    isActive: false,
    points: 90,
    name: 'Gibson Wheeler',
    team: 'red'
  }]

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    team: { type: GraphQLString },
    points: { type: GraphQLInt }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    player: {
      type: PlayerType,
      args: { id: { type: GraphQLString } },
      resolve (parent, args) {
        // code to get data from DB
        return _.find(players, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
