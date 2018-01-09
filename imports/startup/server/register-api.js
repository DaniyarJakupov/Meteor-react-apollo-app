import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import resolutionSchema from './graphql/schemas/resolution-schema.graphql';
import rootSchema from './graphql/schema';
import resolvers from './graphql/resolvers';

const typeDefs = [rootSchema, resolutionSchema];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
