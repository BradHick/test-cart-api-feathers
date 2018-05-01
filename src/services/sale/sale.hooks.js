const updateStock = require('./before-hooks/update-stock');
const returnStock = require('./after-hooks/return-stock');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [updateStock()],
    update: [updateStock()],
    patch: [updateStock()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [returnStock()]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
