import Resolutions from '../../collections/resolutions';

// Resolutions.insert({
//   name: 'Find a job',
// });
// Resolutions.remove({});

export default {
  getResolutions: () => Resolutions.find({}).fetch(),

  createResolution: async (_, args) => {
    try {
      const resId = await Resolutions.insert({ ...args });

      return Resolutions.findOne(resId);
    } catch (error) {
      throw error;
    }
  },
};
