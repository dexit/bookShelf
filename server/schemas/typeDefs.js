const { gql }     = require('apollo-server-express');


const typeDefs = gql`
                        type Auth {
                                    token: String!
                                    user: User
                        },
                        type User {
                                    
                                    _id: ID!
                                    username: String!
                                    email: String!
                        },
                        type Book {
                                    _id: ID!
                                    bookId: ID!
                                    description: String!
                                    authors: [String!]!
                                    image: String!
                                    link: String!
                                    title: String!
                        },
                        type BookInput {
                                        bookId: ID!
                                        description: String!
                                        authors: [String!]!
                                        image: String!
                                        link: String!
                                        title: String!

                        },
                        type UserInput {
                                        username: String!
                                        email: String!
                                        password: String!

                        },
                        type Query {
                                        loggedIn: User!

                        },
                        type Mutation{
                                        createUser( user: UserInput!    ): Auth!
                                        loginUser(  email: String!, password: String!   ): Auth!
                                        saveBook(   book: BookInput!    ): User!
                                        deleteBook( bookId: String! ): User!

                        }
`;

module.exports = typeDefs;