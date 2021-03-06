// Initializes the `cart` service on path `/cart`
const hooks = require('./cart.hooks');
const extendService = require('../../helpers/extend-services');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'cart',
    extend: 'base/cart',
    allowedMethods: ['create', 'patch','find', 'remove','get'],
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cart', extendService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cart');

  service.hooks(hooks);

};
