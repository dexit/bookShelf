const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const { findById } = require("../models/User");
const resolvers = {
    Query: {
            loggedIn: async (   parent,   args,  context   ) => {
                if (!context.user) { throw new AuthenticationError("You must be logged in"); }
                
                const user = await User.findById(context.user._id);

                return user
            }
    },
    Mutation:{
        createUser: async (parent, { user: userInput }) => {
            const user = await User.create(userInput);
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (parent, { email, password }) => {
        },
        saveBook: async (parent, { book }, context) => {

        },
        deleteBook: async (parent, { bookId }, context) => {

        },

    },
}