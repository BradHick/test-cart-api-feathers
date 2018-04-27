const user = require('./user/user.service.js');
const product = require('./product/product.service.js');
const cart = require('./cart/cart.service.js');
const sale = require('./sale/sale.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(user);
  app.configure(product);
  app.configure(cart);
  app.configure(sale);
};
