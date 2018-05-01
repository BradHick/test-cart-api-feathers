const calcTotal = require('./before-hooks/calc-total');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [calcTotal()],
    update: [calcTotal()],
    patch: [calcTotal()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
