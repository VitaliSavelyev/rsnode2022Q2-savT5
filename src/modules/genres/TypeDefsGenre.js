const { gql } = require('apollo-server-express')

const typeDefsGenre = gql`
    type Genre {
        id: ID!,
        name: String!,
        description: String, 
        country: String, 
        year: Int, 
    }
    
    type DELETE {
        acknowledged: Boolean
        deletedCount: Int
}
    
    #Queries
    type Query {
        genres(limit: Int, offset: Int): [Genre]!
        genre(id: ID!): Genre
    }
    
    #Inputs
    input CreateGenreInput {
        id: ID,
        name: String!,
        description: String,
        country: String,
        year: Int
    }
    
    input UpdateGenreInput {
        id: ID!,
        name: String,
        description: String,
        country: String,
        year: Int
    }
    
    #Mutations
    type Mutation {
    createGenre(createGenreInput: CreateGenreInput): Genre!,
    deleteGenre(id: ID!): DELETE,
    updateGenre(updateGenreInput: UpdateGenreInput): Genre!,
    }
`;

module.exports = { typeDefsGenre }
