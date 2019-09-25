const graphql = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql

var players = [
  {
    id: '5c755ff9af458fde27863223',
    isActive: true,
    points: 52,
    team: 'yellow',
    detailsid: '1'
  },
  {
    id: '5c755ff9d107d51a8c59a816',
    isActive: false,
    points: 59,
    team: 'red',
    detailsid: '2'
  },
  {
    id: '5c755ff916257a510268b41a',
    isActive: false,
    points: 74,
    team: 'blue',
    detailsid: '3'
  },
  {
    id: '5c755ff9fe54cd6cb2f6f242',
    isActive: true,
    points: 69,
    team: 'green',
    detailsid: '4'
  },
  {
    id: '5c755ff9e51820789ff67f4e',
    isActive: true,
    points: 35,
    team: 'red',
    detailsid: '5'
  }]

var playerDetails = [
  {
    id: '1',
    name: 'Oneal Sims',
    mobile: 1234567810
  },
  {
    id: '2',
    name: 'Maddox Craig',
    mobile: 1234567899
  },
  {
    id: '3',
    name: 'Santiago Gross',
    mobile: 1234567898
  },
  {
    id: '4',
    name: 'Shannon Walter',
    mobile: 1234567897
  },
  {
    id: '5',
    name: 'Brittney Guthrie',
    mobile: 1234567896
  }]

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    team: { type: GraphQLString },
    points: { type: GraphQLInt },
    details: {
      type: PlayerDetailsType,
      resolve (parent, args) {
        return _.find(playerDetails, { id: parent.detailsid })
      }
    }
  })
})

const PlayerDetailsType = new GraphQLObjectType({
  name: 'PlayerDetails',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    mobile: { type: GraphQLInt }
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
    },
    details: {
      type: PlayerDetailsType,
      args: { id: { type: GraphQLString } },
      resolve (parent, args) {
        return _.find(playerDetails, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
