// Initializes the `sale` service on path `/sale`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sale.model');
const hooks = require('./sale.hooks');
const filters = require('./sale.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'sale',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sale', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sale');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
