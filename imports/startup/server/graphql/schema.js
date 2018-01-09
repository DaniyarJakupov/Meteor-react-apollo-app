export default `
type User {
  username: String
  email: String
}

type Query {
  getUser: User
  getResolutions: [Resolution]
}

schema {
  query: Query
}
`;
