import UserResolver from './user-resolver';

export default {
  Query: {
    getUser: UserResolver.getUser,
  },
};
