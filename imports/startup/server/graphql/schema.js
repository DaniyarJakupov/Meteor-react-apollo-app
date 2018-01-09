export default `
type Query {
  getResolutions: [Resolution]
}

type Mutation {
  createResolution(name: String!): Resolution
}

schema {
  query: Query
  mutation: Mutation
}
`;
