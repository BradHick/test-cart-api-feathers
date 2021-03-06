// Initializes the `product` service on path `/product`
const hooks = require('./product.hooks');
const extendService = require('../../helpers/extend-services');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'product',
    extend: 'base/product',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product', extendService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product');

  service.hooks(hooks);

};
