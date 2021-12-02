const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    #Get Tracks array for homepage grid#
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    #The track's title#
    title: String!
    "The tracks main author"
    author: Author!
    "The tracks main illlustration in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
