// Initializes the `sale` service on path `/sale`
const hooks = require('./sale.hooks');
const extendService = require('../../helpers/extend-services');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'sale',
    extend: 'base/sale',
    allowedMethods: ['create', 'patch','find', 'remove','get'],
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sale', extendService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sale');

  service.hooks(hooks);

};
