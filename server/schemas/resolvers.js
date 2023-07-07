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
            return { 
                token,
                 user
             };
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ 
                email 
            });

            if (!user) { throw new AuthenticationError("I cant agree or deny the existence of this email");    }
            const passwordOk = await user.isCorrectPassword(password);
            if (!passwordOk) { throw new AuthenticationError("Incorrect credentials");  }
        
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { book }, context) => {
            if (!context.user) { throw new AuthenticationError("You must be logged in"); }
            const userBookAdd = await User.findOneAndUpdate(
                    { _id: context.user_id},
                     { $addToSet: { 
                        savedBooks: book 
                        }
                     },
                     { new: true, runValidators: true }
                ); 
                return userBookAdd;           
        },
        deleteBook: async (parent, { bookId }, context) => {
            if (!context.user) { throw new AuthenticationError("You must be logged in"); }
            const userBookPull = await User.findOneAndUpdate(
                { _id: context.user_id},
                 { $pull: { 
                    savedBooks: {
                        bookId: bookId
                        }
                     }
                },
                 { new: true}
            ); 
            return userBookPull;           
        },

    },
}