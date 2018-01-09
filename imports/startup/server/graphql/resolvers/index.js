import UserResolver from './user-resolver';
import ResolutionsResolver from './resolutions-resolver';

export default {
  Query: {
    getUser: UserResolver.getUser,
    getResolutions: ResolutionsResolver.getResolutions,
  },
};
