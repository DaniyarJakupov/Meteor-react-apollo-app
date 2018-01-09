import Resolutions from '../../collections/resolutions';

// Resolutions.insert({
//   name: 'Find a job',
// });

export default {
  getResolutions: () => Resolutions.find({}).fetch(),
};
