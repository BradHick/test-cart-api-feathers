// Initializes the `user` service on path `/user`
const hooks = require('./user.hooks');
const extendService = require('../../helpers/extend-services')

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'user',
    extend: 'base/user',
    allowedMethods: ['create', 'patch','find', 'remove','get'],
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user', extendService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user');

  service.hooks(hooks);

};
