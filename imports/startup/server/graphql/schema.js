export default `
type User {
  username: String
  email: String
}

type Query {
  getUser: User
}

schema {
  query: Query
}
`;
