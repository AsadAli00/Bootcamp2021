require("dotenv").config();

const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

mongoose.connect(URL).then(() => {
    console.log("connected to Database")
}).catch((err) => {
    console.log(err);
})

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const ToDo = mongoose.model("ToDo", toDoSchema);

//GraphQL schema

const typeDefs = gql`
    type ToDo {
        id: ID!
        title: String!
        description: String!
    }
        input ToDoInput {
        title: String!
        description: String!
    }
    type Query {
        getToDo(toDoId: ID!): ToDo!
        getToDos: [ToDo!]!
    }
    type Mutation {
        createToDo(toDoInput: ToDoInput): ToDo
        updateToDo(toDoId: ID!, toDoInput: ToDoInput): ToDo
        deleteToDo(toDoId: ID!): ToDo
        deleteToDos: [ToDo!]!
    }
    `;



// const typeDefs = gql`
// type ToDo {
//     id: ID!
//     title: String!
//     description: String!
// }
// input ToDoInput {
//     title: String!
//     description: String!
// }
// type Query {
//     getToDo(toDoId: ID!): ToDo!
//     getToDos: [ToDo!]!
// }

// type Mutation {
//     createToDo(toDoInput: ToDoInput): ToDo
//     updateToDo(toDoId : ID!, toDoInput: ToDoInput): ToDo
//     deleteToDo(toDoId: ID!) : ToDo
//     deleteToDos : [ToDo!]!
// }
// `;

const resolvers ={
    Query : {
        getToDo: async (parent, args) =>{
            try {
                const {toDoID} = args;
                console.log(toDoID);
                return await ToDo.findById(toDoID);
            }
            catch(error){
                throw new Error(error)
            }
        },
        getToDos : async (parent, agrs) =>{
            try {
                return await ToDo.find();
            }
            catch(error){
                throw new Error(error)
            }
        },

    },

    Mutation: {
        createToDo : async (parent, args) => {
            try {
                const {toDoInput} = args;
                return await ToDo.create(toDoInput);
            }
            catch(error){
                throw new Error(error)
            }
        },
        updateToDo: async (parent, args) => {
            try {
                const { toDoId, toDoInput } = args;
            console.log(toDoId);
                return await ToDo.findOneAndUpdate(toDoId, toDoInput,  { new: true });
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteToDo: async (parent, args) => {
            try {
                const { toDoId } = args;
                return await ToDo.findByIdAndDelete(toDoId);
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteToDos: async (parent, args) => {
            try {
                return await ToDo.remove();
            } catch (error) {
                throw new Error(error);
            }
        },
    }
};

const server = new ApolloServer({ typeDefs, resolvers})

server.listen().then(({ url } ) => {
    console.log(`server ready at ${url}`);
});