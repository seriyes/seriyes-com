const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const mongo = require('mongoose');
const { GraphQLModule } = require('@graphql-modules/core');
const NoteModule = require('./modules/Notes/index');

mongo.connect('mongodb://new_username:new_password@localhost:27017/cafe-sim', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongo.connection.once('open', () => {
  console.log('connected to database');
});

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};


const graphQlModule = new GraphQLModule({
  typeDefs: [],
  resolvers: {},
  imports: [
    NoteModule,
  ],
});

const { schema } = graphQlModule;
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
