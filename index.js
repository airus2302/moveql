import { GraphQLServer } from 'graphql-yoga';
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
import resolvers from './graphql/resolvers';

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// };

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});
server.start(() => console.log('Graphql Server Running'));
