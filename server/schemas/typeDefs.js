const { gql }     = require('apollo-server-express');
const typeDefs = gql`
type Auth {
token: String!
user: User
},
type User {
    
    _id: ID!
},
type Book {
    _id: ID!
},
type BookInput {
    bookId: ID!
},
type UserInput {
    
},
type Query {

},
type Mutation{

}
`;

module.exports = typeDefs;