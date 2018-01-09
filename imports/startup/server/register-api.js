import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionSchema from '../../api/resolutions/Resolutions.graphql';
import rootSchema from './graphql/schema';
import resolvers from './graphql/resolvers';

const typeDefs = [rootSchema, ResolutionSchema];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
